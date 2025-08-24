import { ButtonList, InputList } from '../../component'
import {
  JOIN_BUTTONEYE_INITIAL_STATE,
  JOIN_INPUT_INITIAL_STATE,
  LOGIN_BUTTONEYE_INITIAL_STATE,
  LOGIN_INPUT_INITIAL_STATE,
} from '../../component/input/contant'
import joinInputData from '../../data/jogin-input-data.json'
import loginInputData from '../../data/login-input-data.json'
import { useState } from 'react'

export default function Form({ label, buttonLabel, formId }) {
  const getInitialState = (formId) => {
    if (formId === 'join') {
      return {
        value: JOIN_INPUT_INITIAL_STATE,
        error: JOIN_INPUT_INITIAL_STATE,
        isOpen: JOIN_BUTTONEYE_INITIAL_STATE,
      }
    } else if (formId === 'login') {
      return {
        value: LOGIN_INPUT_INITIAL_STATE,
        error: LOGIN_INPUT_INITIAL_STATE,
        isOpen: LOGIN_BUTTONEYE_INITIAL_STATE,
      }
    }
  }

  const initialState = getInitialState(formId)

  const [value, setValue] = useState(initialState.value)
  const [error, setError] = useState(initialState.error)
  const [isOpen, setIsOpen] = useState(initialState.isOpen)

  // formId에 따라 다른 input 데이터 선택
  const getInputData = (formId) => {
    if (formId === 'join') {
      return joinInputData
    } else if (formId === 'login') {
      return loginInputData
    }
  }

  const inputData = getInputData(formId)

  return (
    <>
      <form action="" className="join-form">
        <h2 className="sr-only">{label}</h2>
        <ul className="join-list">
          <InputList
            formId={formId}
            value={value}
            setValue={setValue}
            error={error}
            setError={setError}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            inputData={inputData}
          />
        </ul>
        <ButtonList buttonLabel={buttonLabel} />
      </form>
    </>
  )
}
