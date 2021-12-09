import { VFC } from 'react'
import { ContentType } from 'ducks/main'
import Colmun from 'components/atoms/Column'
import { List } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SidebarMenuLink from 'components/organizms/Sidebar/SidebarMenuLink'
import SearchIcon from '@mui/icons-material/Search'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import SettingsIcon from '@mui/icons-material/Settings'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import LoginButton from 'components/organizms/Sidebar/LoginButton'
import UserProfileButton from 'components/organizms/Sidebar/UserProfileButton'
import { User } from 'firebase/auth'

type Props = {
  displayedContent: ContentType
  handleChangeDisplayedContent: (value: ContentType) => void
  currentUser: User | null | undefined
}

const Presenter: VFC<Props> = ({ displayedContent, handleChangeDisplayedContent, currentUser }) => (
  <Colmun>
    <div className="flex flex-col items-center justify-between h-screen">
      <div className="flex justify-center w-11/12">
        <List>
          <SidebarMenuLink
            linkIcon={<EditIcon />}
            linkLabel="TL編集"
            isSelected={displayedContent === 'tl'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('tl')}
          />
          <SidebarMenuLink
            linkIcon={<SearchIcon />}
            linkLabel="TL検索"
            isSelected={displayedContent === 'search'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('search')}
          />
          <SidebarMenuLink
            linkIcon={<StarBorderIcon />}
            linkLabel="お気に入り"
            isSelected={displayedContent === 'favs'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('favs')}
          />
          <SidebarMenuLink
            linkIcon={<SyncAltIcon />}
            linkLabel="キャラ略称設定"
            isSelected={displayedContent === 'name'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('name')}
          />
          <SidebarMenuLink
            linkIcon={<SettingsIcon />}
            linkLabel="設定"
            isSelected={displayedContent === 'config'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('config')}
          />
        </List>
      </div>
      <div className="flex justify-center w-11/12 mb-8">
        {currentUser && <UserProfileButton user={currentUser} />}
        {!currentUser && <LoginButton />}
      </div>
    </div>
  </Colmun>
)

export default Presenter
