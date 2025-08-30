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

## 전체 컴포넌트 접근성 고려사항

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
