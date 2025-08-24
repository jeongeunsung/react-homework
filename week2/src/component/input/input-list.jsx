import Input from './input'

export default function InputList({
  formId,
  value,
  setValue,
  error,
  setError,
  isOpen,
  setIsOpen,
  inputData,
}) {
  // 비밀번호 텍스트 표시
  function handleClick(id) {
    setIsOpen((state) => ({ ...state, [id]: !state[id] }))
  }

  // input value값 입력
  function handleTextInput(e) {
    const { id, value } = e.target
    setValue((state) => ({ ...state, [id]: value }))
  }

  // 이름 유효성 검사
  function handleTextBlur(e) {
    const { id, value } = e.target

    if (value.length < 2) {
      setError((state) => ({ ...state, [id]: '2글자 이상 입력하세요' }))
    } else {
      setError((state) => ({ ...state, [id]: '' }))
    }
  }

  // 이메일 유효성 검사
  function handleEmailBlur(e) {
    const { id, value } = e.target
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const emailRegExpBlooean = emailRegExp.test(value)

    if (!emailRegExpBlooean) {
      setError((state) => ({
        ...state,
        [id]: '유효한 이메일 주소를 입력해야 합니다. 예) user@company.io',
      }))
    } else {
      setError((state) => ({ ...state, [id]: '' }))
    }
  }

  // 패스워드 유효성 검사
  function handlePasswordBlur(e) {
    const { id, value } = e.target
    const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/
    const passwordRegExpBoolean = passwordRegExp.test(value)

    if (!passwordRegExpBoolean) {
      setError((state) => ({
        ...state,
        [id]: '숫자, 영문 조합 6자리 이상 입력하세요',
      }))
    } else {
      setError((state) => ({ ...state, [id]: '' }))
    }
  }

  // 패스워드 확인 유효성 검사
  function handlePasswordCheckBlur(e) {
    const { id, value: inputValue } = e.target
    const passwordKey = `${formId}InputPassWord`

    if (value[passwordKey] !== inputValue) {
      setError((state) => ({
        ...state,
        [id]: '입력한 패스워드 다시 입력하세요',
      }))
    } else {
      setError((state) => ({ ...state, [id]: '' }))
    }
  }

  return (
    <>
      {inputData.map((data) => (
        <Input
          key={data.id}
          type={data.type}
          id={`${formId}${data.id}`}
          label={data.label}
          placeholder={data.placeholder}
          value={value[`${formId}${data.id}`]}
          onInput={handleTextInput}
          onBlur={
            data.type === 'text'
              ? handleTextBlur
              : data.type === 'email'
                ? handleEmailBlur
                : data.type === 'password'
                  ? data.id === `InputPassWord`
                    ? handlePasswordBlur
                    : handlePasswordCheckBlur
                  : undefined
          }
          isOpen={isOpen[`${formId}${data.id}`]}
          onClick={() => handleClick(`${formId}${data.id}`)}
          error={error[`${formId}${data.id}`]}
        />
      ))}
    </>
  )
}
