import { VFC, useState } from 'react'
import { useAppDispatch } from 'app/hooks'
import { addNameConversionRule } from 'ducks/style'
import Presenter from './presenter'

const ConversionRuleInput: VFC = () => {
  const [nameFrom, setNameFrom] = useState('')
  const [nameTo, setNameTo] = useState('')
  const dispatch = useAppDispatch()
  const handleDeleteNameConversionRule = (key: string, value: string) => () =>
    dispatch(addNameConversionRule({ key, value }))

  return (
    <Presenter
      nameFrom={nameFrom}
      nameTo={nameTo}
      setNameFrom={setNameFrom}
      setNameTo={setNameTo}
      handleClickSubmit={handleDeleteNameConversionRule}
    />
  )
}
export default ConversionRuleInput
