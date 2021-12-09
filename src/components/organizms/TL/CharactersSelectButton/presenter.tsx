import { VFC } from 'react'
import { Button } from '@mui/material'
import CharactersSelectModal from 'components/organizms/TL/CharactersSelectModal'
import CommonDialog from 'components/atoms/CommonDialog'

type Props = {
  onClick: () => void
  isCharactersSelectModalOpen: boolean
  setIsCharactersSelectModalOpen: (val: boolean) => void
  onDialogClose: () => void
  dialogButtons: {
    label: string
    handleClick: () => void
  }[]
  isDialogOpen: boolean
  setIsDialogOpen: (val: boolean) => void
}

const CharactersSelectButton: VFC<Props> = ({
  onClick,
  isCharactersSelectModalOpen,
  setIsCharactersSelectModalOpen,
  onDialogClose,
  dialogButtons,
  isDialogOpen,
  setIsDialogOpen,
}) => (
  <>
    <Button variant="contained" color="primary" onClick={onClick}>
      編成選択
    </Button>
    <CharactersSelectModal
      isOpen={isCharactersSelectModalOpen}
      setIsOpen={setIsCharactersSelectModalOpen}
    />
    <CommonDialog
      title="キャラクター選択"
      text="選択されているキャラクターを変更した場合、今までの入力は全て破棄されますがよろしいですか？"
      buttons={dialogButtons}
      setIsOpen={setIsDialogOpen}
      isOpen={isDialogOpen}
      onClose={onDialogClose}
    />
  </>
)

export default CharactersSelectButton
