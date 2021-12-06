import { VFC } from 'react'
import { Button } from '@mui/material'
import CharactersSelectModal from 'components/organizms/TL/CharactersSelectModal'

type Props = {
  isCharactersSelectModalOpen: boolean
  setIsCharactersSelectModalOpen: (val: boolean) => void
}

const CharactersSelectButton: VFC<Props> = ({
  isCharactersSelectModalOpen,
  setIsCharactersSelectModalOpen,
}) => (
  <>
    <Button
      variant="contained"
      color="primary"
      onClick={() => setIsCharactersSelectModalOpen(true)}
    >
      編成選択
    </Button>
    <CharactersSelectModal
      isOpen={isCharactersSelectModalOpen}
      setIsOpen={setIsCharactersSelectModalOpen}
    />
  </>
)

export default CharactersSelectButton
