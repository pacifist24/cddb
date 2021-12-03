import { VFC } from 'react'
import { ContentType } from 'ducks/main'
import Colmun from 'components/atoms/Column'
import { Box, List } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import SidebarMenuLink from 'components/organizms/Sidebar/SidebarMenuLink'
import SearchIcon from '@mui/icons-material/Search'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import SettingsIcon from '@mui/icons-material/Settings'
import SyncAltIcon from '@mui/icons-material/SyncAlt'

// import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'

type Props = {
  displayedContent: ContentType
  handleChangeDisplayedContent: (value: ContentType) => void
}

const Presenter: VFC<Props> = ({ displayedContent, handleChangeDisplayedContent }) => (
  <Colmun>
    <Box
      sx={{
        width: '90%',
        margin: [0, 'auto'],
        paddingTop: '3px',
        bgcolor: 'background.paper',
      }}
    >
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
    </Box>
  </Colmun>
)

export default Presenter
