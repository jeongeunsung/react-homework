import './button.css'

/**
 * Button 컴포넌트
 * @param {Object} props
 * @param {string} props.buttonLabel - 버튼 글자
 */
export default function Button({ buttonLabel }) {
  return (
    <button type="submit" className="button full rounded">
      {buttonLabel}
    </button>
  )
}
