import { VFC, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import {
  selectExcludedCharacters,
  addExcludedCharacter,
  removeExcludedCharacter,
} from 'ducks/search'
import Presenter from './presenter'

const ExcludedCharactersSelectButton: VFC = () => {
  const dispatch = useAppDispatch()
  const excludedCharacters = useAppSelector(selectExcludedCharacters)
  const [isExcludedCharactersSelectModalOpen, setIsExcludedCharactersSelectModalOpen] =
    useState(false)

  return (
    <Presenter
      excludedCharacters={excludedCharacters}
      addExcludedCharacter={(value: string) => dispatch(addExcludedCharacter(value))}
      removeExcludedCharacter={(value: string) => dispatch(removeExcludedCharacter(value))}
      isExcludedCharactersSelectModalOpen={isExcludedCharactersSelectModalOpen}
      setIsExcludedCharactersSelectModalOpen={setIsExcludedCharactersSelectModalOpen}
    />
  )
}

export default ExcludedCharactersSelectButton
