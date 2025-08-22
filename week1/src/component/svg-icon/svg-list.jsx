import { ICON_TYPES } from './contants'
import { Spinner, SvgIcon } from './svg-icon'

export default function IconsList({ iconType = ICON_TYPES.UP_ARROW }) {
  return (
    <>
      <SvgIcon iconType={iconType} />
      <SvgIcon iconType="check-mark" />
      <SvgIcon iconType="cross" />
      <SvgIcon iconType="not-allowed" />
      <Spinner iconType="spinner" label="로딩 중" />
    </>
  )
}
