import { VFC } from 'react'

type Props = {
  handleClick: () => void
}

const InsertUBNextButton: VFC<Props> = ({ handleClick }) => (
  <button
    type="button"
    title="次行にUBを追加する"
    className="p-1 ml-1 text-gray-500 rounded-full transition-colors duration-300 hover:bg-gray-200 active:bg-gray-400"
    onClick={handleClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  </button>
)

export default InsertUBNextButton
