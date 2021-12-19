import { VFC } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import clsx from 'clsx'
import { CHARACTERS_INFO } from 'lib/gameConstants'

const CharacterImage: VFC<{
  name: string
  isSelected: boolean
  toggleIsSelected: (name: string) => void
}> = ({ name, isSelected, toggleIsSelected }) => (
  <button
    type="button"
    onClick={() => toggleIsSelected(name)}
    className={clsx({
      '': isSelected,
      'opacity-40': !isSelected,
    })}
  >
    <img src={`/characters/${name}.png`} className="w-12 h-12 m-0.5" alt="" />
  </button>
)

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  excludedCharacters: string[]
  toggleExcludedCharacter: (characterName: string) => void
}

const ExcludedCharactersSelectModal: VFC<Props> = ({
  isOpen,
  setIsOpen,
  excludedCharacters,
  toggleExcludedCharacter,
}) => (
  <Dialog
    maxWidth="lg"
    open={isOpen}
    onClose={() => {
      setIsOpen(false)
    }}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">使用不可キャラ選択</DialogTitle>
    <DialogContent>
      <div className="flex flex-wrap">
        {Object.keys(CHARACTERS_INFO)
          .sort((a, b) => CHARACTERS_INFO[a].position - CHARACTERS_INFO[b].position)
          .map((key) => (
            <CharacterImage
              name={key}
              key={key}
              isSelected={!excludedCharacters.includes(key)}
              toggleIsSelected={toggleExcludedCharacter}
            />
          ))}
      </div>
    </DialogContent>
    <DialogActions>
      <Button
        onClick={() => {
          setIsOpen(false)
        }}
        color="primary"
      >
        OK
      </Button>
    </DialogActions>
  </Dialog>
)

export default ExcludedCharactersSelectModal
