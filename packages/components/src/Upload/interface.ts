import { CSSProperties, ReactNode } from 'react'

export type UploadStatus = 'init' | 'uploading' | 'done' | 'error'

export interface UploadFile {
  /** 唯一标识 */
  uid: string
  /** 文件名 */
  name?: string
  /** 文件大小 */
  size?: number
  /** 文件类型 */
  type?: string
  /** 文件 URL（上传成功后） */
  url?: string
  /** 缩略图 URL */
  thumbUrl?: string
  /** 上传状态 */
  status?: UploadStatus
  /** 上传进度 */
  percent?: number
  /** 原始文件 */
  originFile?: File
  /** 服务端响应 */
  response?: unknown
}

export interface UploadRequestOptions {
  file: File
  action?: string
  headers?: Record<string, string>
  data?:
    | Record<string, string | Blob>
    | ((file: File) => Record<string, string | Blob>)
  name?: string
  withCredentials?: boolean
  onProgress?: (percent: number, event?: ProgressEvent) => void
  onSuccess?: (response: unknown) => void
  onError?: (error: Error) => void
}

export interface UploadProps {
  className?: string | string[]
  style?: CSSProperties
  /** 是否禁用 */
  disabled?: boolean
  /** 接受的文件类型 */
  accept?: string
  /** 是否支持多选 */
  multiple?: boolean
  /** 是否支持文件夹上传 */
  directory?: boolean
  /** 是否支持拖拽上传 */
  drag?: boolean
  /** 上传地址 */
  action?: string
  /** 上传请求头 */
  headers?: Record<string, string>
  /** 上传额外数据 */
  data?:
    | Record<string, string | Blob>
    | ((file: File) => Record<string, string | Blob>)
  /** 上传文件的字段名 */
  name?: string
  /** 是否携带 cookie */
  withCredentials?: boolean
  /** 默认文件列表 */
  defaultFileList?: UploadFile[]
  /** 文件列表（受控） */
  fileList?: UploadFile[]
  /** 是否显示文件列表 */
  showUploadList?: boolean
  /** 是否自动上传 */
  autoUpload?: boolean
  /** 文件数量限制 */
  limit?: number
  /** 列表类型 */
  listType?: 'text' | 'picture-list' | 'picture-card'
  /** 提示文案 */
  tip?: ReactNode
  /** 触发元素 */
  children?: ReactNode
  /** 自定义上传 */
  customRequest?: (options: UploadRequestOptions) => { abort: () => void }
  /** 上传前校验 */
  beforeUpload?: (
    file: File,
    fileList: File[]
  ) => boolean | Promise<boolean | File>
  /** 文件状态变化回调 */
  onChange?: (fileList: UploadFile[], file: UploadFile) => void
  /** 文件移除回调 */
  onRemove?: (file: UploadFile) => boolean | Promise<boolean> | void
  /** 上传进度回调 */
  onProgress?: (file: UploadFile, event?: ProgressEvent) => void
  /** 上传成功回调 */
  onSuccess?: (file: UploadFile, response: unknown) => void
  /** 上传失败回调 */
  onError?: (file: UploadFile, error: Error) => void
  /** 超出限制回调 */
  onExceedLimit?: (files: File[], fileList: UploadFile[]) => void
  /** 预览回调 */
  onPreview?: (file: UploadFile) => void
  /** 自定义渲染文件列表 */
  renderUploadList?: (
    fileList: UploadFile[],
    uploadListProps: { onRemove: (file: UploadFile) => void }
  ) => ReactNode
  /** 自定义渲染上传项 */
  renderUploadItem?: (
    file: UploadFile,
    props: { onRemove: () => void }
  ) => ReactNode
}
