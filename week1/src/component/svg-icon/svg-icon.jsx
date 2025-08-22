import { ICON_PATHS, ICON_TYPES } from './contants'

/**
 * SVG 아이콘 컴포넌트
 * @typedef {Object} SvgIconProps
 * @param {string} props.iconType - 아이콘 타입 'up-arrow', 'check-mark', 'cross', 'not-allowed'
 * @param {string | undefined} props.label - 접근성을 위한 레이블, 문자열이면 aria-label 사용, false 또는 빈값이면 aria-hidden="true" 사용
 * @param {number} props.size - 아이콘 크기
 * @param {string} props.color - 아이콘 색상
 * @returns JSX Element
 */

/**
 * @param {SvgIconProps} props
 */

export function SvgIcon({
  iconType = ICON_TYPES.UP_ARROW,
  label = '',
  size = 16,
  color = '#525577',
}) {
  // iconType에 따라 path 선택(존재하지 아이콘일 경우 기본 아이콘 up-arrow 표시)
  const defaultIconType = ICON_TYPES.UP_ARROW
  const pathData = ICON_PATHS[iconType] || ICON_PATHS[defaultIconType]

  // 접근성 aria 추가
  const ariaProps = label
    ? { 'aria-label': label, 'title': label }
    : { 'aria-hidden': true }

  // not-allowed 아이콘일경우 색상 변경
  const iconColor = iconType === ICON_TYPES.NOT_ALLOWED ? 'red' : color

  if (iconType === ICON_TYPES.SPINNER) {
    return <Spinner label="로딩 중" size={16} color="#525577" />
  }

  return (
    <svg
      role="img"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 12 12"
      {...ariaProps}
    >
      <path
        fill={iconColor}
        fillRule="evenodd"
        d={pathData}
        clipRule="evenodd"
      />
    </svg>
  )
}

/**
 * Spinner 컴포넌트
 * @typedef {Object} SpinnerProps
 * @param {string | undefined} props.label - 접근성을 위한 레이블 (비어있는 경우 aria-hidden: true, 표현 이미지 처리)
 * @param {number} props.size - 아이콘 크기
 * @param {string} props.color - 아이콘 색상
 * @returns JSX Element
 */

/**
 * @param {SpinnerProps} props
 */

export function Spinner({ label = '', size = 16, color = '#525577' }) {
  const ariaProps = label
    ? { 'aria-label': label, 'title': label }
    : { 'aria-hidden': true }

  return (
    <svg
      role="img"
      width={size}
      height={size}
      stroke={color}
      viewBox="0 0 24 24"
      {...ariaProps}
    >
      <g className="spinner_V8m1">
        <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3" />
      </g>
    </svg>
  )
}
