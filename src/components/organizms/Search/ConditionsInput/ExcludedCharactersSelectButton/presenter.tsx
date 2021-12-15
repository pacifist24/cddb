import { VFC } from 'react'
import { Button, FormLabel } from '@mui/material'
import ExcludedCharactersSelectModal from './ExcludedCharactersSelectModal'

type Props = {
  excludedCharacters: string[]
  addExcludedCharacter: (characterName: string) => void
  removeExcludedCharacter: (characterName: string) => void
  isExcludedCharactersSelectModalOpen: boolean
  setIsExcludedCharactersSelectModalOpen: (open: boolean) => void
}

const ExcludedCharactersSelectButton: VFC<Props> = ({
  excludedCharacters,
  addExcludedCharacter,
  removeExcludedCharacter,
  isExcludedCharactersSelectModalOpen,
  setIsExcludedCharactersSelectModalOpen,
}) => (
  <div className="">
    <FormLabel component="legend">使用不可キャラ選択</FormLabel>
    <div className="mt-3">
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsExcludedCharactersSelectModalOpen(true)}
      >
        使用不可キャラ選択
      </Button>
    </div>
    {excludedCharacters.length === 0 && <div className="mt-3">全キャラ使用可</div>}
    {excludedCharacters.length !== 0 && (
      <>
        <div className="flex flex-wrap mt-3">
          {excludedCharacters.map((name) => (
            <img src={`/characters/${name}.png`} className="w-12 h-12 m-0.5" alt="" />
          ))}
        </div>
        <div className="mt-3">以上のキャラは検索対象から除外</div>
      </>
    )}
    <ExcludedCharactersSelectModal
      isOpen={isExcludedCharactersSelectModalOpen}
      setIsOpen={setIsExcludedCharactersSelectModalOpen}
      excludedCharacters={excludedCharacters}
      addExcludedCharacter={addExcludedCharacter}
      removeExcludedCharacter={removeExcludedCharacter}
    />
  </div>
)

export default ExcludedCharactersSelectButton
