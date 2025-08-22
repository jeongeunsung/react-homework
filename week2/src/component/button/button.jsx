import './button.css'

export default function Button({ label }) {
  return (
    <button type="submit" className="button full rounded">
      {label}
    </button>
  )
}
