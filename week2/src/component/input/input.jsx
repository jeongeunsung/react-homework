import './input.css'

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
