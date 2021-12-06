import { VFC, useState } from 'react'
import Presenter from './presenter'

const CharactersSelectButton: VFC = () => {
  const [isCharactersSelectModalOpen, setIsCharactersSelectModalOpen] = useState(false)
  return (
    <Presenter
      setIsCharactersSelectModalOpen={setIsCharactersSelectModalOpen}
      isCharactersSelectModalOpen={isCharactersSelectModalOpen}
    />
  )
}

export default CharactersSelectButton
