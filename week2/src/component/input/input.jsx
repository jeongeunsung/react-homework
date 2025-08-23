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

  // input value값 입력
  function handleTextInput(e) {
    const value = e.target.value
    setValue(value)
  }

  // 이름 유효성 검사
  function handleTextBlur(e) {
    const nameValue = e.target.value
    if (nameValue.length < 2) {
      setError('2글자 이상 입력하세요')
    } else {
      setError('')
    }
  }

  // 이메일 유효성 검사
  function handleEmailBlur(e) {
    const emailValue = e.target.value
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      setError('유효한 이메일 주소를 입력해야 합니다. 예) user@company.io')
    } else {
      setError('')
    }
  }

  // 패스워드 유효성 검사
  function handlePasswordBlur(e) {
    const passwordValue = e.target.value
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    if (e.target.name === 'inputPassWord' && !regex.test(passwordValue)) {
      setError('숫자, 영문 조합 6자리 이상 입력하세요')
    } else {
      setError('')
    }
  }

  // 패스워드 확인 유효성 검사
  function handlePasswordCheckBlur(e) {
    const passwordCheckValue = e.target.value

    if (e.target.form.inputPassWord.value !== passwordCheckValue) {
      setError('입력한 패스워드 다시 입력하세요')
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
              value={value}
              onInput={handleTextInput}
              onBlur={
                id === 'inputPassWord'
                  ? handlePasswordBlur
                  : handlePasswordCheckBlur
              }
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
            onInput={handleTextInput}
            onBlur={type === 'text' ? handleTextBlur : handleEmailBlur}
            required
          />
        )}
        <p className="error-text">{error}</p>
      </li>
    </>
  )
}
