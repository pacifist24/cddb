import { VFC } from 'react'
import clsx from 'clsx'

type Props = {
  favsNum: number
  isEvaluated: boolean
  onClick: () => void
  disabled: boolean
}

const FavButton: VFC<Props> = ({ favsNum, isEvaluated, onClick, disabled }) => (
  <button type="button" onClick={onClick} disabled={disabled}>
    <div className="flex items-center text-sm">
      <div
        className={clsx({
          'text-red-500': isEvaluated,
          'text-gray-500': !isEvaluated,
        })}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <span className="text-sm font-bold">{favsNum}</span>
    </div>
  </button>
)

export default FavButton
