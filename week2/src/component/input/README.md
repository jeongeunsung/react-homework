# Input 컴포넌트 가이드

Input 컴포넌트는 다양한 아이콘을 일관된 방식으로 렌더링하는 재사용 가능한 컴포넌트입니다.
컴포넌트는 폼 입력 필드를 관리하며 타입별 렌더링하는 재사용 가능한 컴포넌트입니다.
개별 Input 컴포넌트와 InputList 컴포넌트로 구성되어 있습니다.

## 특징

- text, email, password 타입에 따라 UI 제공
- password 타입에서 눈 모양 버튼으로 보임/숨김 제공
- 오류 메시지를 input 하단에 표시
- label과 input 연결하며, aria-label 지원
- 입력 값, 오류, 비밀번호 표시 상태 통합 관리
- 각 필드 타입별 자동 유효성 검사

## 사용법

### 기본 사용법

```
import Input from './input'

<Input
  type="password"
  id="joinInputPassWord"
  label="패스워드"
  placeholder="숫자, 영문 조합 6자리 이상 입력"
  value={value}
  error={error}
  isOpen={isOpen}
  onInput={handleTextInput}
  onBlur={handlePasswordBlur}
  onClick={handleClick}
/>
```

### 속성(props)

### Input 컴포넌트 props

| 속성명      | 타입     | 기본값 | 설명                              |
| ----------- | -------- | ------ | --------------------------------- |
| type        | string   | ''     | Input type(text, email, password) |
| id          | string   | ''     | Input Id                          |
| label       | string   | ''     | Input 라벨 텍스트                 |
| placeholder | string   | ''     | Input placeholder                 |
| value       | string   | ''     | Input 입력 값                     |
| error       | string   | ''     | 오류 메시지                       |
| isOpen      | boolean  | false  | 비밀번호 표시/숨김 상태           |
| onInput     | function | ''     | 입력 이벤트 핸들러                |
| onBlur      | function | ''     | 포커스 아웃 이벤트 핸들러         |
| onClick     | function | ''     | 클릭 이벤트 핸들러                |

### InputList 컴포넌트 props

| 속성명    | 타입     | 기본값 | 설명                         |
| --------- | -------- | ------ | ---------------------------- |
| formId    | string   | ''     | form id(join, login)         |
| value     | object   | {}     | Input 입력 값                |
| setValue  | function | ''     | Input 입력 값 설정 함수      |
| error     | object   | {}     | 오류 상태                    |
| setError  | function | ''     | 오류 설정 함수               |
| isOpen    | object   | {}     | 비밀번호 표시 상태           |
| setIsOpen | function | ''     | 비밀번호 표시 상태 설정 함수 |
| inputData | array    | []     | Input 데이터 배열            |

## 접근성 고려사항

### HTML 구조

- htmlFor와 id 속성으로 연결합니다.
- 각 입력 필드에 명확한 라벨 제공합니다.
- required 속성으로 필수 입력 필드 구분합니다.

### ARIA 속성

- 비밀번호 보임/숨김 버튼에 설명 제공합니다.

```
aria-label={`비밀번호 ${isOpen ? '보임' : '숨김'}`}
```

### 키보드 접근성

- 논리적인 Tab 순서로 필드 이동합니다.
- 폼 제출을 위한 Enter 키 지원합니다.
- 명확한 포커스 표시로 현재 위치 인식합니다.

## 오류 사항

### 자주 발생하는 문제들

1. **상태 키 불일치**
   - 문제: `value[formId + data.id]`에서 undefined 반환
   - 해결: 상태 키와 input id가 정확히 일치하는지 확인

2. **유효성 검사 함수 미호출**
   - 문제: onBlur 이벤트가 발생하지 않음
   - 해결: onBlur 조건문에서 올바른 타입과 id 비교 확인

3. **비밀번호 표시/숨김 미작동**
   - 문제: isOpen 상태가 제대로 업데이트되지 않음
   - 해결: handleClick 함수에서 올바른 키로 상태 업데이트 확인

4. **중복된 id 오류**
   - 문제: DOM에서 동일한 id를 가진 요소가 2개 존재
   - 해결: formId를 포함한 고유한 id 생성 (`${formId}${data.id}`)

5. **React Hook 규칙 위반**
   - 문제: useState를 일반 함수에서 사용
   - 해결: React 컴포넌트는 대문자로 시작해야 함

### 디버깅 팁

```
// 상태 확인을 위한 로그 추가
console.log('InputList 렌더링:', { formId, value, error, isOpen })

// 이벤트 핸들러 호출 확인
function handlePasswordBlur(e) {
  console.log('handlePasswordBlur 호출됨:', e.target.id)
  // ... 나머지 로직
}
```

## 구현 과정 및 학습 내용

### 컴포넌트 설계 원칙

버튼은 Stateless 컴포넌트로 구현하고, 입력 필드는 값 제어가 필요하므로 Stateful 컴포넌트로 구현했다. 각 input의 역할에 맞춰 필드를 정의하고, 입력 시 useState로 값을 객체 형태로 관리해 필요할 때 참조했다. 또한 유효성 규칙을 적용해 조건에 맞지 않을 경우 해당 필드에 오류 메시지를 출력하도록 했다.

### 유효성 검사 구현 과정

처음에는 if문과 논리 연산자를 사용해 유효성 검사를 구현했다. 하지만 조건이 복잡해지는 것 같았다. 이후 정규표현식을 사용하니 같은 검사를 훨씬 간단하고 직관적으로 처리할 수 있어서, 최종적으로 정규표현식 기반으로 로직을 수정했다.

### 상태 끌어올리기 과정

상태를 끌어 올리는 과정에서 오류가 많이 발생했다. 여러개의 input 요소들이 있다 보니 input.jsx에 상태를 넣었을때 잘 작동되었던게 같은 로직을 app.jsx에 옮기니 이름을 입력할 때 모든 input에 값이 적용이 되고 유효성 검사도 뜨지 않았다. 이유는 useState에 각각의 input 요소마다 별도의 상태가 필요했기 때문이다. 따라서 여러 input의 상태를 객체로 묶어서 관리해야 각 input 요소의 값과 유효성을 개별적으로 제어할 수 있었다.

### 동적 키 문법 학습

이 과정에서 setState 업데이트 시 [id]를 사용했는데, 이는 객체의 key를 동적으로 지정하기 위해 필요한 문법이라는 것을 알게 되었다. 즉, [id]를 사용하면 입력된 input의 id 값에 따라 해당 필드만 업데이트할 수 있다.

### 컴포넌트 분리 및 재사용성 개선

input.jsx의 stateful 컴포넌트를 app.jsx로 상태를 끌어올렸지만, app.jsx 에 상태가 너무 많아 재사용 가능성이 떨어지지 않을까 하는 의문이 생겼다. 또한 기능이 너무 많이 모여 있어서 유지보수가 어려워지고 재사용성도 낮아지는 문제가 있었다. 그래서 기능들을 분리하여, 각 기능과 상태를 독립적으로 관리할 수 있도록 로직을 다시 작성하기로 결정했다.

### Form 컴포넌트 분리

Form.jsx를 만들어 formId 값에 따라 회원가입 폼과 로그인 폼을 분리했다. 그런데 버튼이 각 폼마다 두 개씩 생기는 문제가 발생했다. 원인은 객체를 map으로 순환하면서 버튼이 중복 렌더링된 것이었다. 그래서 객체 사용을 제거하고, App.jsx에서 buttonLabel을 props로 전달하여 각 폼에 버튼이 하나씩만 생성되도록 수정했다.

### formId 기반 input 관리

하지만 그 과정에서 formId 값을 input의 id로 사용하면서 value와 유효성 검사 로직이 정상적으로 동작하지 않는 문제가 생겼다. 결국 AI의 도움을 받아 로직을 수정하고 정상적으로 작동하도록 해결했다. formId에 따라서 input 요소를 들고 올려고 하니 data도 join, login 데이터를 따로 구분해서 들고 와야했다. 그래서 로그인, 회원가입 데이터 파일을 따로 만들어 객체를 생성했다.

### 최종 아키텍처

최종적으로는 App.jsx에서 Form 컴포넌트를 두 번 렌더링하고, 각각에 formId와 buttonLabel을 props로 전달하는 구조로 만들었다. Form 컴포넌트 내부에서는 formId에 따라 적절한 inputData를 선택하고, InputList와 ButtonList를 렌더링한다. 각 Form 컴포넌트는 독립적인 상태를 가지며, formId를 포함한 고유한 키로 상태를 관리한다.

### 학습한 핵심 개념들

이 과정을 통해 상태 관리 패턴, 동적 키 문법, 컴포넌트 분리, Props 전달, 정규표현식 활용, 고유성 보장 등 React 개발에 필요한 핵심 개념들을 학습할 수 있었다. 특히 여러 컴포넌트 간의 상태 공유와 독립적인 상태 관리의 균형을 맞추는 방법을 이해하게 되었다.
