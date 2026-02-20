import React, {
  forwardRef,
  useCallback,
  useContext,
  useRef,
  useState,
} from 'react'
import cs from '../_util/classNames'
import { useMergeValue } from '../_util/hooks'
import { ConfigContext } from '../ConfigProvider/context'
import useMergeProps from '../hooks/useMergeProps'
import Progress from '../Progress'
import { UploadFile, UploadProps, UploadRequestOptions, UploadStatus } from './interface'
import { defaultRequest, getUid } from './request'

const defaultProps: Partial<UploadProps> = {
  listType: 'text',
  showUploadList: true,
  autoUpload: true,
  name: 'file',
}

function Upload(baseProps: UploadProps, ref: React.Ref<HTMLDivElement>) {
  const { getPrefixCls, componentConfig } = useContext(ConfigContext)
  const props = useMergeProps<UploadProps>(
    baseProps,
    defaultProps as UploadProps,
    (componentConfig?.Upload ?? {}) as UploadProps
  )

  const {
    className,
    style,
    disabled,
    accept,
    multiple,
    directory,
    drag,
    action,
    headers,
    data,
    name: fieldName,
    withCredentials,
    showUploadList,
    autoUpload,
    limit,
    listType,
    tip,
    children,
    customRequest,
    beforeUpload,
    onChange,
    onRemove,
    onProgress,
    onSuccess,
    onError,
    onExceedLimit,
    onPreview,
    renderUploadList,
    renderUploadItem,
    ...rest
  } = props

  const prefixCls = getPrefixCls('upload')

  const [fileList, setFileList] = useMergeValue<UploadFile[]>([], {
    defaultValue: props.defaultFileList,
    value: props.fileList,
  })

  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const abortMap = useRef<Map<string, { abort: () => void }>>(new Map())

  const updateFile = useCallback(
    (file: UploadFile, newFileList?: UploadFile[]) => {
      const list = newFileList || fileList
      const newList = list.map((f) =>
        f.uid === file.uid ? { ...f, ...file } : f
      )
      setFileList(newList)
      onChange?.(newList, file)
    },
    [fileList, setFileList, onChange]
  )

  const doUpload = useCallback(
    (file: UploadFile) => {
      if (!file.originFile) return

      const uploadFile: UploadFile = { ...file, status: 'uploading', percent: 0 }

      const requestOptions: UploadRequestOptions = {
        file: file.originFile,
        action,
        headers,
        data,
        name: fieldName,
        withCredentials,
        onProgress: (percent, event) => {
          uploadFile.percent = percent
          uploadFile.status = 'uploading'
          updateFile(uploadFile)
          onProgress?.(uploadFile, event)
        },
        onSuccess: (response) => {
          uploadFile.status = 'done'
          uploadFile.percent = 100
          uploadFile.response = response
          updateFile(uploadFile)
          onSuccess?.(uploadFile, response)
          abortMap.current.delete(file.uid)
        },
        onError: (error) => {
          uploadFile.status = 'error'
          updateFile(uploadFile)
          onError?.(uploadFile, error)
          abortMap.current.delete(file.uid)
        },
      }

      const request = customRequest || defaultRequest
      const result = request(requestOptions)
      abortMap.current.set(file.uid, result)
    },
    [
      action,
      headers,
      data,
      fieldName,
      withCredentials,
      customRequest,
      updateFile,
      onProgress,
      onSuccess,
      onError,
    ]
  )

  const handleFiles = useCallback(
    async (files: File[]) => {
      if (limit && fileList.length + files.length > limit) {
        onExceedLimit?.(files, fileList)
        const allowed = files.slice(0, limit - fileList.length)
        if (allowed.length === 0) return
        files = allowed
      }

      const newUploadFiles: UploadFile[] = []

      for (const file of files) {
        if (beforeUpload) {
          const result = await Promise.resolve(beforeUpload(file, files))
          if (result === false) continue
        }

        const uploadFile: UploadFile = {
          uid: getUid(),
          name: file.name,
          size: file.size,
          type: file.type,
          status: 'init',
          percent: 0,
          originFile: file,
        }
        newUploadFiles.push(uploadFile)
      }

      if (newUploadFiles.length === 0) return

      const newList = [...fileList, ...newUploadFiles]
      setFileList(newList)
      onChange?.(newList, newUploadFiles[0])

      if (autoUpload) {
        newUploadFiles.forEach((f) => doUpload(f))
      }
    },
    [
      fileList,
      limit,
      beforeUpload,
      autoUpload,
      setFileList,
      onChange,
      onExceedLimit,
      doUpload,
    ]
  )

  const handleRemove = useCallback(
    async (file: UploadFile) => {
      if (onRemove) {
        const result = await Promise.resolve(onRemove(file))
        if (result === false) return
      }
      // 取消上传
      const abortCtrl = abortMap.current.get(file.uid)
      if (abortCtrl) {
        abortCtrl.abort()
        abortMap.current.delete(file.uid)
      }
      const newList = fileList.filter((f) => f.uid !== file.uid)
      setFileList(newList)
      onChange?.(newList, { ...file, status: 'init' })
    },
    [fileList, setFileList, onChange, onRemove]
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    handleFiles(files)
    // 重置 input
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    if (disabled) return
    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const triggerUpload = () => {
    if (disabled) return
    inputRef.current?.click()
  }

  const renderFileList = () => {
    if (!showUploadList || fileList.length === 0) return null

    if (renderUploadList) {
      return renderUploadList(fileList, { onRemove: handleRemove })
    }

    return (
      <div className={`${prefixCls}-list ${prefixCls}-list-${listType}`}>
        {fileList.map((file) => {
          if (renderUploadItem) {
            return (
              <React.Fragment key={file.uid}>
                {renderUploadItem(file, { onRemove: () => handleRemove(file) })}
              </React.Fragment>
            )
          }

          return (
            <div
              key={file.uid}
              className={cs(`${prefixCls}-list-item`, {
                [`${prefixCls}-list-item-${file.status}`]: file.status,
              })}
            >
              {(listType === 'picture-list' || listType === 'picture-card') && (
                <div
                  className={`${prefixCls}-list-item-thumbnail`}
                  onClick={() => onPreview?.(file)}
                >
                  {file.thumbUrl || file.url ? (
                    <img src={file.thumbUrl || file.url} alt={file.name} />
                  ) : (
                    <span className={`${prefixCls}-list-item-icon`}>📄</span>
                  )}
                </div>
              )}
              <div className={`${prefixCls}-list-item-content`}>
                <span
                  className={`${prefixCls}-list-item-name`}
                  onClick={() => onPreview?.(file)}
                >
                  {file.name}
                </span>
                {file.status === 'uploading' && (
                  <Progress percent={file.percent || 0} size="small" />
                )}
              </div>
              <span
                className={`${prefixCls}-list-item-remove`}
                onClick={() => handleRemove(file)}
              >
                ×
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  const classString = cs(
    prefixCls,
    {
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-drag`]: drag,
      [`${prefixCls}-drag-over`]: dragOver,
      [`${prefixCls}-${listType}`]: listType,
    },
    className
  )

  const inputProps: Record<string, unknown> = {}
  if (directory) {
    inputProps.webkitdirectory = 'true'
  }

  return (
    <div ref={ref} className={classString} style={style} {...rest}>
      {drag ? (
        <div
          className={`${prefixCls}-trigger-drag`}
          onClick={triggerUpload}
          onDragOver={(e) => {
            e.preventDefault()
            setDragOver(true)
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
        >
          {children || (
            <div className={`${prefixCls}-trigger-drag-text`}>
              <p>点击或拖拽文件到此区域上传</p>
            </div>
          )}
        </div>
      ) : listType === 'picture-card' ? (
        <div className={`${prefixCls}-picture-card-wrapper`}>
          {renderFileList()}
          {(!limit || fileList.length < limit) && (
            <div
              className={`${prefixCls}-trigger-picture-card`}
              onClick={triggerUpload}
            >
              {children || (
                <span className={`${prefixCls}-trigger-picture-card-icon`}>
                  +
                </span>
              )}
            </div>
          )}
        </div>
      ) : (
        <div className={`${prefixCls}-trigger`} onClick={triggerUpload}>
          {children || <button disabled={disabled}>上传文件</button>}
        </div>
      )}
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        {...inputProps}
      />
      {tip && <div className={`${prefixCls}-tip`}>{tip}</div>}
      {listType !== 'picture-card' && renderFileList()}
    </div>
  )
}

const UploadComponent = forwardRef<HTMLDivElement, UploadProps>(Upload)
UploadComponent.displayName = 'Upload'

export default UploadComponent
export type { UploadFile, UploadProps, UploadStatus }
