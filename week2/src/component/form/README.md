# Form 컴포넌트 가이드

Form 컴포넌트는

## 특징

-

## 사용법

### 기본 사용법

```

```

### 속성(props)

### From 컴포넌트 props

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
