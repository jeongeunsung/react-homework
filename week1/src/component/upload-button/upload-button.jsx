import { ICON_TYPES } from '../svg-icon/contants'
import { SvgIcon } from '../svg-icon/svg-icon'
import { UPLOAD_STATUS, UPLOAT_LABEL } from './contants'

export default function UploadButton({
  status = UPLOAD_STATUS.IDLE,
  disabled = false,
}) {
  // 상태에 따라 label 값 설정(기본값(업로드) 표시)
  const buttonLabel = UPLOAT_LABEL[status] ?? UPLOAT_LABEL.IDLE

  // 상태에 따라 아이콘 타입 결정
  const getIconType = (status) => {
    switch (status) {
      case UPLOAD_STATUS.IDLE:
        return ICON_TYPES.UP_ARROW
      case UPLOAD_STATUS.LOADING:
        return ICON_TYPES.SPINNER
      case UPLOAD_STATUS.RESOLVED:
        return ICON_TYPES.CHECK_MARK
      case UPLOAD_STATUS.REJECTED:
        return ICON_TYPES.CROSS
    }
  }

  const iconType = getIconType(status)

  // 업로드 버튼이 비활성화(disabled)일 경우
  if (disabled === true) {
    return (
      <button
        type="button"
        className={`button ${ICON_TYPES.UP_ARROW}`}
        disabled={disabled}
      >
        {buttonLabel}
        <SvgIcon iconType={ICON_TYPES.NOT_ALLOWED} />
      </button>
    )
  }

  return (
    <button type="button" className={`button ${iconType}`} disabled={disabled}>
      {buttonLabel}
      <SvgIcon iconType={iconType} />
    </button>
  )
}
