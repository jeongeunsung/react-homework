import './button.css'

export default function Button({ buttonLabel }) {
  return (
    <button type="submit" className="button full rounded">
      {buttonLabel}
    </button>
  )
}
