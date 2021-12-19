import { VFC, useState } from 'react'
import { useAppSelector, useAppDispatch } from 'app/hooks'
import { selectExcludedCharacters, toggleExcludedCharacter } from 'ducks/routes'
import Presenter from './presenter'

const ExcludedCharactersSelectButton: VFC = () => {
  const dispatch = useAppDispatch()
  const excludedCharacters = useAppSelector(selectExcludedCharacters)
  const [isExcludedCharactersSelectModalOpen, setIsExcludedCharactersSelectModalOpen] =
    useState(false)

  return (
    <Presenter
      excludedCharacters={excludedCharacters}
      toggleExcludedCharacter={(value: string) => dispatch(toggleExcludedCharacter(value))}
      isExcludedCharactersSelectModalOpen={isExcludedCharactersSelectModalOpen}
      setIsExcludedCharactersSelectModalOpen={setIsExcludedCharactersSelectModalOpen}
    />
  )
}

export default ExcludedCharactersSelectButton
