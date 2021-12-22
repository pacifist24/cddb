import { VFC } from 'react'
import AddButton from 'components/atoms/AddButton'

type Props = {
  handleClick: () => void
}

const InsertUBNextButton: VFC<Props> = ({ handleClick }) => (
  <AddButton onClick={handleClick} disabled={false} />
)

export default InsertUBNextButton
