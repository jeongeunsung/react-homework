import { useState } from 'react'
import './input.css'

export default function Input({ type, id, label, placeholder }) {
  const [isOpen, setIsOpen] = useState(false)
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  // 비밀번호 텍스트 표시
  function handleClick() {
    setIsOpen(!isOpen)
  }

  // 이름 유효성 검사
  function handleTextInput(e) {
    const nameValue = e.target.value
    setValue(nameValue)
  }

  function handleTextBlur(e) {
    const nameValue = e.target.value
    if (nameValue.length < 2) {
      setError('2글자 이상 입력하세요')
    } else {
      setError('')
    }
  }

  // 이메일 유효성 검사
  function handleEmailInput(e) {
    const emailValue = e.target.value
    setValue(emailValue)
  }

  function handleEmailBlur(e) {
    const emailValue = e.target.value
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      setError('유효한 이메일 주소를 입력해야 합니다. 예) user@company.io')
    } else {
      setError('')
    }
  }

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
              required
            />
            <button
              type="button"
              onClick={handleClick}
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
            onInput={type === 'text' ? handleTextInput : handleEmailInput}
            onBlur={type === 'text' ? handleTextBlur : handleEmailBlur}
            required
          />
        )}
        <p className="error-text">{error}</p>
      </li>
    </>
  )
}
