import { VFC } from 'react'
import clsx from 'clsx'

type Props = {
  onClick: () => void
  disabled: boolean
}

const AddButton: VFC<Props> = ({ onClick, disabled }) => (
  <button
    type="button"
    className={clsx('rounded-full p-1 transition-colors duration-300 text-gray-500', {
      'opacity-50 cursor-default': disabled,
      'hover:bg-gray-200 active:bg-gray-400': !disabled,
    })}
    onClick={onClick}
    disabled={disabled}
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

export default AddButton
