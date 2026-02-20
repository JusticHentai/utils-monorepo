import { useEffect, useState } from 'react'

import isBrowser from '../isBrowser'
import visibility from '../visibility'
import { VisibilityState } from '../visibility/interface'

const getVisibility = (): VisibilityState => {
  if (!isBrowser()) {
    return VisibilityState.Visible
  }

  return document.visibilityState as VisibilityState
}

/**
 * 监听页面可见性变化
 *
 * @returns 当前页面可见性状态

 */
const useDocumentVisibility = (): VisibilityState => {
  const [documentVisibility, setDocumentVisibility] = useState(getVisibility)

  useEffect(() => {
    const cleanup = visibility({
      visible: () => setDocumentVisibility(VisibilityState.Visible),
      hidden: () => setDocumentVisibility(VisibilityState.Hidden),
    })

    return cleanup
  }, [])

  return documentVisibility
}

export default useDocumentVisibility
