import { VFC } from 'react'
import { ContentType } from 'ducks/main'
import { List } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SidebarMenuLink from 'components/organizms/Sidebar/SidebarMenuLink'
import SearchIcon from '@mui/icons-material/Search'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import SettingsIcon from '@mui/icons-material/Settings'
import SyncAltIcon from '@mui/icons-material/SyncAlt'
import NoteIcon from '@mui/icons-material/Note'
import MovingIcon from '@mui/icons-material/Moving'
import LoginButton from 'components/organizms/Sidebar/LoginButton'
import UserProfileButton from 'components/organizms/Sidebar/UserProfileButton'

type Props = {
  displayedContent: ContentType
  handleChangeDisplayedContent: (value: ContentType) => void
  isWide: boolean
}

const Presenter: VFC<Props> = ({ displayedContent, handleChangeDisplayedContent, isWide }) => (
  <div className=" overflow-scroll overflow-x-hidden">
    <div
      className="flex flex-col items-center justify-between h-screen"
      style={{ height: isWide ? '100vh' : 'calc(100vh - 2.5rem)' }}
    >
      <div className="flex justify-center w-11/12">
        <List>
          <SidebarMenuLink
            linkIcon={<SearchIcon />}
            linkLabel="TL検索"
            isSelected={displayedContent === 'search'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('search')}
          />
          <SidebarMenuLink
            linkIcon={<EditIcon />}
            linkLabel="TL編集"
            isSelected={displayedContent === 'tl'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('tl')}
          />
          <SidebarMenuLink
            linkIcon={<StarBorderIcon />}
            linkLabel="TL保管"
            isSelected={displayedContent === 'favs'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('favs')}
          />
          <SidebarMenuLink
            linkIcon={<MovingIcon />}
            linkLabel="凸ルート計算"
            isSelected={displayedContent === 'route'}
            handleChangeDisplayedContent={() => handleChangeDisplayedContent('route')}
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
          {!isWide && (
            <SidebarMenuLink
              linkIcon={<NoteIcon />}
              linkLabel="TL出力"
              isSelected={displayedContent === 'output'}
              handleChangeDisplayedContent={() => handleChangeDisplayedContent('output')}
            />
          )}
        </List>
      </div>
      <div className="flex justify-center w-11/12 mb-8">
        <UserProfileButton />
        <LoginButton />
      </div>
    </div>
  </div>
)

export default Presenter
