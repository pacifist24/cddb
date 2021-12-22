import { VFC } from 'react'
import DeleteButton from 'components/atoms/DeleteButton'

type Props = {
  handleClick: () => void
}

const AddGroupButton: VFC<Props> = ({ handleClick }) => (
  <DeleteButton onClick={handleClick} disabled={false} />
)

export default AddGroupButton
