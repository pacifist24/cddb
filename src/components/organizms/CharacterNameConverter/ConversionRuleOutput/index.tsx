import { VFC } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { deleteNameConversionRule, selectNameConversionTable } from 'ducks/style'
import Presenter from './presenter'

const ConversionRuleOutput: VFC = () => {
  const dispatch = useAppDispatch()
  const nameConversionTable = useAppSelector(selectNameConversionTable)
  const handleDeleteNameConversionRule = (key: string) => () =>
    dispatch(deleteNameConversionRule(key))

  return (
    <Presenter
      nameConversionTable={nameConversionTable}
      handleDelete={handleDeleteNameConversionRule}
    />
  )
}

export default ConversionRuleOutput
