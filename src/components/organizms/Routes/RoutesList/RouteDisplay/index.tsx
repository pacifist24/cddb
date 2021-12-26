import { VFC, useState } from 'react'
import { TLState, loadTL } from 'ducks/tl'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import {
  RouteState,
  selectCalculatedAttackNumConditions,
  selectCalculatedDoesCalcRestConditions,
} from 'ducks/routes'
import { addFav } from 'ducks/favs'
import { useCommonAlertContext } from 'components/atoms/CommonAlertProvider'
import useMedia from 'use-media'
import { generateTLId } from 'lib/util'
import Presenter from './presenter'

type Props = {
  route: RouteState
  tlDic: { [tlId: string]: TLState }
}

const RouteDisplay: VFC<Props> = ({ route, tlDic }) => {
  const dispatch = useAppDispatch()
  const openAlert = useCommonAlertContext()
  const calculatedAttackNumConditions = useAppSelector(selectCalculatedAttackNumConditions)
  const calculatedDoesCalcRestConditions = useAppSelector(selectCalculatedDoesCalcRestConditions)
  const [groupName, setGroupName] = useState('')
  const [isGroupNameSelectDialogOpen, setIsGroupNameSelectDialogOpen] = useState(false)
  const [targetTL, setTargetTL] = useState<TLState>(undefined)
  const isWide = useMedia({ minWidth: '1000px' })

  const handleClickDialogOK = () => {
    dispatch(addFav({ targetTLId: generateTLId(), tl: targetTL, group: groupName }))
    setIsGroupNameSelectDialogOpen(false)
    openAlert({
      message: 'TLを新規保存しました。',
      severity: 'success',
      duration: 1500,
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'center',
      },
    })
  }

  const makeMenuItems = (tl: TLState) => [
    {
      title: 'TLを読み込む',
      func: () => {
        dispatch(loadTL(tl))
        openAlert({
          message: 'TLの読み込みに成功しました',
          severity: 'success',
          duration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
        })
      },
    },
    {
      title: 'TL保管に追加',
      func: () => {
        setTargetTL(tl)
        setIsGroupNameSelectDialogOpen(true)
      },
    },
  ]

  return (
    <Presenter
      route={route}
      tlDic={tlDic}
      calculatedAttackNumConditions={calculatedAttackNumConditions}
      calculatedDoesCalcRestConditions={calculatedDoesCalcRestConditions}
      makeMenuItems={makeMenuItems}
      isWide={isWide}
      groupName={groupName}
      handleChangeGroupName={setGroupName}
      isOpen={isGroupNameSelectDialogOpen}
      setIsOpen={setIsGroupNameSelectDialogOpen}
      handleClickOK={handleClickDialogOK}
      handleClickCancel={() => setIsGroupNameSelectDialogOpen(false)}
    />
  )
}

export default RouteDisplay
