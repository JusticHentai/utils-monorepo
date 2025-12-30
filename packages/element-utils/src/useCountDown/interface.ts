/**
 * 倒计时 Hook 参数
 */
export interface UseCountDownProps {
  initialSeconds: number
}

/*
 * 计时器状态
 */
export enum COUNT_DOWN_STATUS {
  IDLE,
  RUNNING,
  PAUSED,
}
