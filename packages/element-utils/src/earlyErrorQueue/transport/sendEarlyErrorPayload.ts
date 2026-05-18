import estimateBytes from '../../estimateBytes'
import safeStringify from '../../safeStringify'
import supportFetch from '../../supportFetch'
import supportSendBeacon from '../../supportSendBeacon'
import type { EarlyErrorPayload, EarlyErrorSendResult } from '../interface'
import { EARLY_ERROR_TRANSPORT } from '../interface'

const DEFAULT_KEEPALIVE_LIMIT = 60 * 1024

const postByFetch = async (
  url: string,
  body: string,
  credentials?: RequestCredentials,
  keepalive = false
): Promise<boolean> => {
  if (!supportFetch()) return false

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      credentials,
      keepalive,
    })

    return response.ok
  } catch {
    return false
  }
}

const postByBeacon = (url: string, body: string, bytes: number): boolean => {
  if (!supportSendBeacon()) return false
  if (bytes > DEFAULT_KEEPALIVE_LIMIT) return false

  try {
    const blob = new Blob([body], { type: 'application/json' })
    return window.navigator.sendBeacon(url, blob)
  } catch {
    return false
  }
}

/** 发送早期错误 payload */
const sendEarlyErrorPayload = async (
  url: string,
  payload: EarlyErrorPayload,
  transport: EARLY_ERROR_TRANSPORT = EARLY_ERROR_TRANSPORT.FETCH,
  credentials?: RequestCredentials
): Promise<EarlyErrorSendResult> => {
  const body = safeStringify(payload)
  const bytes = estimateBytes(body)

  if (payload.events.length === 0) {
    return {
      success: true,
      transport,
      count: 0,
      bytes,
    }
  }

  if (transport === EARLY_ERROR_TRANSPORT.BEACON) {
    const beaconSuccess = postByBeacon(url, body, bytes)
    if (beaconSuccess) {
      return {
        success: true,
        transport: EARLY_ERROR_TRANSPORT.BEACON,
        count: payload.events.length,
        bytes,
      }
    }

    const keepaliveSuccess = await postByFetch(url, body, credentials, true)
    return {
      success: keepaliveSuccess,
      transport: EARLY_ERROR_TRANSPORT.BEACON,
      count: payload.events.length,
      bytes,
    }
  }

  const success = await postByFetch(url, body, credentials)

  return {
    success,
    transport: EARLY_ERROR_TRANSPORT.FETCH,
    count: payload.events.length,
    bytes,
  }
}

export default sendEarlyErrorPayload
