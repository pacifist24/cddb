import { VFC } from 'react'
import Button from '@mui/material/Button'
import CommonDialog from 'components/atoms/CommonDialog'

type Props = {
  title: string
  text: string
  onClose: () => void
  buttons: {
    label: string
    handleClick: () => void
  }[]
  isOpen: boolean
  setIsOpen: (val: boolean) => void
  onClick: () => void
}

const ParseTLFromClipboardButton: VFC<Props> = ({
  title,
  text,
  buttons,
  isOpen,
  setIsOpen,
  onClose,
  onClick,
}) => (
  <>
    <Button variant="contained" color="primary" onClick={onClick}>
      クリップボードからTLを読込
    </Button>
    <CommonDialog
      title={title}
      text={text}
      buttons={buttons}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      onClose={onClose}
    />
  </>
)

export default ParseTLFromClipboardButton
