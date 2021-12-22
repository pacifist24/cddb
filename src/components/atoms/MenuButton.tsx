import { VFC } from 'react'
import { PopoverOrigin } from '@mui/material'
import CommonMenu from 'components/atoms/CommonMenu'
import clsx from 'clsx'

type Props = {
  menuItems: {
    title: string
    func: () => void
  }[]
  anchorOrigin: PopoverOrigin
  disabled: boolean
}
const MenuButton: VFC<Props> = ({ menuItems, anchorOrigin, disabled }) => (
  <CommonMenu menuItems={menuItems} anchorOrigin={anchorOrigin}>
    <div
      className={clsx('rounded-full p-1 transition-colors duration-300 text-gray-500', {
        'opacity-50 cursor-default': disabled,
        'hover:bg-gray-200 active:bg-gray-400': !disabled,
      })}
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
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </div>
  </CommonMenu>
)

export default MenuButton
