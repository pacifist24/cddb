import { VFC } from 'react'
import { useAppSelector } from 'app/hooks'
import { selectTL } from 'ducks/tl'
import { selectNameConversionTable, selectStartTime, selectArrangement } from 'ducks/style'
import formatTL from 'lib/tlFormatter'
import TLOutputTextComponent from './presenter'

const TLOutputText: VFC = () => {
  const tlData = useAppSelector(selectTL)
  const nameConversionTable = useAppSelector(selectNameConversionTable)
  const startTime = useAppSelector(selectStartTime)
  const arrangement = useAppSelector(selectArrangement)

  const tlTextLines = formatTL(tlData, nameConversionTable, arrangement, startTime)

  return <TLOutputTextComponent tlTextLines={tlTextLines} />
}

export default TLOutputText
