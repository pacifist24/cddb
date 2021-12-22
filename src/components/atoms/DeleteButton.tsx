import { VFC } from 'react'
import clsx from 'clsx'

type Props = {
  onClick: () => void
  disabled: boolean
}

const DeleteButton: VFC<Props> = ({ onClick, disabled }) => (
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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      />
    </svg>
  </button>
)

export default DeleteButton
