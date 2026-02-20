import { useCallback, useRef, useState } from 'react'
import { isUndefined } from '../is'

export default function useMergeValue<T>(
  defaultStateValue: T,
  props?: {
    defaultValue?: T
    value?: T
  }
): [T, React.Dispatch<React.SetStateAction<T>>, T] {
  const { defaultValue, value } = props || {}
  const firstRenderRef = useRef(true)
  const [stateValue, setStateValue] = useState<T>(
    !isUndefined(value)
      ? value
      : !isUndefined(defaultValue)
        ? defaultValue
        : defaultStateValue
  )

  const mergedValue = !isUndefined(value) ? value : stateValue

  const previousRef = useRef(mergedValue)

  // eslint-disable-next-line react-hooks/refs
  if (firstRenderRef.current) {
    // eslint-disable-next-line react-hooks/refs
    firstRenderRef.current = false
  } else {
    // eslint-disable-next-line react-hooks/refs
    previousRef.current = mergedValue
  }

  const setState = useCallback(
    (val: React.SetStateAction<T>) => {
      if (isUndefined(value)) {
        setStateValue(val)
      }
    },
    [value]
  )

  // eslint-disable-next-line react-hooks/refs
  return [mergedValue, setState, previousRef.current]
}
