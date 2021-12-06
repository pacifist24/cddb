import { VFC } from 'react'
// import { ContentType } from 'ducks/main'
import Column from 'components/atoms/Column'
import CharactersSelectButton from 'components/organizms/TL/CharactersSelectButton'
import CharactersInput from 'components/organizms/TL/CharactersInput'
// import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'

const Presenter: VFC = () => (
  <Column>
    <CharactersSelectButton />
    <CharactersInput />
  </Column>
)

export default Presenter
