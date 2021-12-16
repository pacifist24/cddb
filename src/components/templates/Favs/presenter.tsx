import { VFC } from 'react'
import Colmun from 'components/atoms/Column'
import FavsList from 'components/organizms/Favs/FavsList'
import GroupInput from 'components/organizms/Favs/GroupInput'
import AddGroupButton from 'components/organizms/Favs/AddGroupButton'
import RemoveGroupButton from 'components/organizms/Favs/RemoveGroupButton'

const Favs: VFC = () => (
  <Colmun>
    <div className=" ml-3">
      <div className="flex items-center justify-end mt-5 mr-8">
        <GroupInput />
        <AddGroupButton />
        <RemoveGroupButton />
      </div>
      <div className="mt-5">
        <FavsList />
      </div>
    </div>
  </Colmun>
)

export default Favs
