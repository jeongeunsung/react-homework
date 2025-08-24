import Form from '../component/form/form'
import './app.css'

export default function App() {
  return (
    <>
      <div className="join-wrapper">
        <h1 className="sr-only">폼 화면</h1>
        <Form label="회원가입" buttonLabel="회원가입" formId="join" />
        <Form label="로그인" buttonLabel="로그인" formId="login" />
      </div>
    </>
  )
}
