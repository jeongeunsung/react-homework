import { Button, Input } from '../component'
import buttonData from '../data/button-data.json'
import inputData from '../data/input-data.json'
import './app.css'

export default function App() {
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
