import { UploadRequestOptions } from './interface'

let uid = 0

export function getUid(): string {
  uid += 1
  return `upload-${Date.now()}-${uid}`
}

export function defaultRequest(options: UploadRequestOptions): {
  abort: () => void
} {
  const {
    file,
    action,
    headers = {},
    data,
    name = 'file',
    withCredentials,
    onProgress,
    onSuccess,
    onError,
  } = options

  const xhr = new XMLHttpRequest()

  if (xhr.upload) {
    xhr.upload.onprogress = (e: ProgressEvent) => {
      if (e.lengthComputable) {
        const percent = Math.round((e.loaded / e.total) * 100)
        onProgress?.(percent, e)
      }
    }
  }

  xhr.onerror = () => {
    onError?.(new Error('Upload request error'))
  }

  xhr.onload = () => {
    if (xhr.status >= 200 && xhr.status < 300) {
      let response: unknown
      try {
        response = JSON.parse(xhr.responseText)
      } catch {
        response = xhr.responseText
      }
      onSuccess?.(response)
    } else {
      onError?.(new Error(`Upload request failed with status ${xhr.status}`))
    }
  }

  const formData = new FormData()

  const extraData = typeof data === 'function' ? data(file) : data
  if (extraData) {
    Object.keys(extraData).forEach((key) => {
      formData.append(key, extraData[key])
    })
  }

  formData.append(name, file)

  xhr.open('POST', action || '', true)

  if (withCredentials) {
    xhr.withCredentials = true
  }

  Object.keys(headers).forEach((key) => {
    xhr.setRequestHeader(key, headers[key])
  })

  xhr.send(formData)

  return {
    abort: () => xhr.abort(),
  }
}
