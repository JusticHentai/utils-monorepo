import getTimezone from '../../../packages/js-utils/src/time/getTimezone'

const enDemo = () => {
  return getTimezone(Date.now(), 'en-US')
}

export default enDemo
