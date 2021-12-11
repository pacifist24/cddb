import { VFC } from 'react'
import { Button } from '@mui/material'
import CharactersSelectModal from 'components/organizms/TL/CharactersSelectModal'

type Props = {
  onClick: () => void
  isCharactersSelectModalOpen: boolean
  setIsCharactersSelectModalOpen: (val: boolean) => void
}

const CharactersSelectButton: VFC<Props> = ({
  onClick,
  isCharactersSelectModalOpen,
  setIsCharactersSelectModalOpen,
}) => (
  <>
    <Button variant="contained" color="primary" onClick={onClick}>
      編成選択
    </Button>
    <CharactersSelectModal
      isOpen={isCharactersSelectModalOpen}
      setIsOpen={setIsCharactersSelectModalOpen}
    />
  </>
)

export default CharactersSelectButton
