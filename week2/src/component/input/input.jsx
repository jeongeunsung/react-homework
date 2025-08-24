import './input.css'

/**
 * Input 컴포넌트
 * @param {Object} props
 * @param {string} props.type - input 요소의 type
 * @param {string} props.id - input 요소의 id, for, name
 * @param {string} props.label - label 요소의 레이블
 * @param {string} props.placeholder - 인풋 요소의 placeholder
 * @param {string | number} props.value - 인풋 요소의 value 값
 * @param {string} props.error - 에러 메시지
 * @param {boolean} props.isOpen - 패스워드의 눈 버튼 보임/숨김
 * @param {(e: React.FormEvent<HTMLInputElement>) => void} props.onInput - 인풋 요소의 실시간 입력값
 * @param {(e: React.FocusEvent<HTMLInputElement>) => void} props.onBlur - 인풋 요소 포커스 벗어났을때 입력값
 * @param {function} props.onClick - 패스워드 눈 버튼
 */

export default function Input({
  type,
  id,
  label,
  placeholder,
  value,
  error,
  isOpen,
  onInput,
  onBlur,
  onClick,
}) {
  return (
    <>
      <li>
        <label htmlFor={id}>{label}</label>
        {type === 'password' ? (
          <div className="password-field">
            <input
              type={isOpen ? 'text' : type}
              id={id}
              name={id}
              placeholder={placeholder}
              value={value}
              onInput={onInput}
              onBlur={onBlur}
              required
            />
            <button
              type="button"
              onClick={() => onClick(id)}
              className={`button-eye ${isOpen ? 'open' : ''}`.trim()}
              aria-label={`비밀번호 ${isOpen ? '보임' : '숨김'}`}
            ></button>
          </div>
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            placeholder={
              type === 'text' ? '2글자 이상 입력' : 'user@company.io'
            }
            value={value}
            onInput={onInput}
            onBlur={onBlur}
            required
          />
        )}
        <p className="error-text">{error}</p>
      </li>
    </>
  )
}
