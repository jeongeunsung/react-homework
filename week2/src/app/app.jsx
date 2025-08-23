import { Button, Input } from '../component'
import buttonData from '../data/button-data.json'
import inputData from '../data/input-data.json'
import { useState } from 'react'
import './app.css'

const INITIAL_OBJECT_INPUT_STATE = {
  inputName: '',
  inputEmail: '',
  inputPassWord: '',
  inputPassWordCheck: '',
}

const INITIAL_OBJECT_BUTTONEYE_STATE = {
  inputPassWord: false,
  inputPassWordCheck: false,
}

export default function App() {
  const [isOpen, setIsOpen] = useState(INITIAL_OBJECT_BUTTONEYE_STATE)
  const [value, setValue] = useState(INITIAL_OBJECT_INPUT_STATE)
  const [error, setError] = useState(INITIAL_OBJECT_INPUT_STATE)

  // 비밀번호 텍스트 표시
  function handleClick(e) {
    setIsOpen((state) => ({ ...state, [e]: !state[e] }))
  }

  // input value값 입력
  function handleTextInput(e) {
    const { id, value } = e.target
    setValue((state) => ({ ...state, [id]: value }))
  }

  // 이름 유효성 검사
  function handleTextBlur(e) {
    const nameValue = e.target.value
    if (nameValue.length < 2) {
      setError((state) => ({ ...state, inputName: '2글자 이상 입력하세요' }))
    } else {
      setError((state) => ({ ...state, inputName: '' }))
    }
  }

  // 이메일 유효성 검사
  function handleEmailBlur(e) {
    const emailValue = e.target.value
    if (!emailValue.includes('@') || !emailValue.includes('.')) {
      setError((state) => ({
        ...state,
        inputEmail: '유효한 이메일 주소를 입력해야 합니다. 예) user@company.io',
      }))
    } else {
      setError((state) => ({ ...state, inputEmail: '' }))
    }
  }

  // 패스워드 유효성 검사
  function handlePasswordBlur(e) {
    const passwordValue = e.target.value
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/

    if (e.target.name === 'inputPassWord' && !regex.test(passwordValue)) {
      setError((state) => ({
        ...state,
        inputPassWord: '숫자, 영문 조합 6자리 이상 입력하세요',
      }))
    } else {
      setError((state) => ({ ...state, inputPassWord: '' }))
    }
  }

  // 패스워드 확인 유효성 검사
  function handlePasswordCheckBlur(e) {
    const passwordCheckValue = e.target.value

    if (e.target.form.inputPassWord.value !== passwordCheckValue) {
      setError((state) => ({
        ...state,
        inputPassWordCheck: '입력한 패스워드 다시 입력하세요',
      }))
    } else {
      setError((state) => ({ ...state, inputPassWordCheck: '' }))
    }
  }

  return (
    <>
      {/* 회원가입 */}
      <div className="join-wrapper">
        <h1 className="sr-only">회원가입</h1>
        <form action="" className="join-form">
          <ul className="join-list">
            {inputData.map((data) => (
              <Input
                key={data.id}
                type={data.type}
                id={data.id}
                label={data.label}
                placeholder={data.placeholder}
                value={value[data.id]}
                onInput={handleTextInput}
                onBlur={
                  data.type === 'text'
                    ? handleTextBlur
                    : data.type === 'email'
                      ? handleEmailBlur
                      : data.id === 'inputPassWord'
                        ? handlePasswordBlur
                        : handlePasswordCheckBlur
                }
                isOpen={isOpen[data.id]}
                onClick={() => handleClick(data.id)}
                error={error[data.id]}
              />
            ))}
          </ul>
          {buttonData.map((data) => (
            <Button key={data.id} label={data.label} />
          ))}
        </form>
      </div>
    </>
  )
}
