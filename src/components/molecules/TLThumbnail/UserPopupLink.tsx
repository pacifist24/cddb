import { VFC } from 'react'
import { omit } from 'lib/util'

type Props = {
  userName: string
  userId: string
}

const UserPopupLink: VFC<Props> = ({ userName, userId }) => (
  <div className="relative ml-1 group">
    <div className="text-sm text-blue-500">{omit(userName, 5, '…')}</div>
    <div className="absolute flex-col items-start hidden p-2 text-sm bg-gray-100 w-72 rounded-md top-6 group-hover:flex">
      <div>
        Name:<span className="ml-1">{userName}</span>
      </div>
      <div>
        ID:<span className="ml-1">{userId}</span>
      </div>
    </div>
  </div>
)

export default UserPopupLink
