import { VFC } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectArrangement, changeArrangement, ArrangeType } from 'ducks/style'
import Presenter from './presenter'

const ArrangementConfigInput: VFC = () => {
  const dispatch = useAppDispatch()
  const handleChangeArrangement = (arrange: ArrangeType) => {
    dispatch(changeArrangement(arrange))
  }
  const arrangement = useAppSelector(selectArrangement)

  return <Presenter arrangement={arrangement} changeArrangement={handleChangeArrangement} />
}
export default ArrangementConfigInput
