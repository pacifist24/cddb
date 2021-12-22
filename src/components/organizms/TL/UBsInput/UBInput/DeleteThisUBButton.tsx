import { VFC } from 'react'
import DeleteButton from 'components/atoms/DeleteButton'

type Props = {
  handleClick: () => void
}

const DeleteThisUBButton: VFC<Props> = ({ handleClick }) => (
  <DeleteButton onClick={handleClick} disabled={false} />
)

export default DeleteThisUBButton
