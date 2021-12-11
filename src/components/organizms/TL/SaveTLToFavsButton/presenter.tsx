import { VFC } from 'react'
import { Button } from '@mui/material'
import CommonDialog from 'components/atoms/CommonDialog'

type Props = {
  onClick: () => void
  onDialogClose: () => void
  dialogButtons: {
    label: string
    handleClick: () => void
  }[]
  isDialogOpen: boolean
  setIsDialogOpen: (val: boolean) => void
}

const SaveTLToFavsButton: VFC<Props> = ({
  onClick,
  onDialogClose,
  dialogButtons,
  isDialogOpen,
  setIsDialogOpen,
}) => (
  <>
    <Button variant="contained" color="primary" onClick={onClick}>
      お気に入り（ローカル）にTLを保存
    </Button>
    <CommonDialog
      title="上書き保存確認"
      text="お気に入りに既に同一IDのTLが存在します、上書き保存しますか？"
      buttons={dialogButtons}
      setIsOpen={setIsDialogOpen}
      isOpen={isDialogOpen}
      onClose={onDialogClose}
    />
  </>
)

export default SaveTLToFavsButton
