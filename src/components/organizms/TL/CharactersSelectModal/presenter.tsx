import { VFC } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'
import clsx from 'clsx'
import { CHARACTERS_INFO } from 'lib/gameConstants'

const CharacterImage: VFC<{
  name: string
  isSelected: boolean
  toggleIsSelected: (name: string, isSelectedNow: boolean) => void
}> = ({ name, isSelected, toggleIsSelected }) => (
  <button
    type="button"
    onClick={() => toggleIsSelected(name, isSelected)}
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
  tempSelectedCharacters: string[]
  toggleIsSelected: (name: string, isSelectedNow: boolean) => void
  handleOK: () => void
}

const CharacterSelectModal: VFC<Props> = ({
  isOpen,
  setIsOpen,
  tempSelectedCharacters,
  toggleIsSelected,
  handleOK,
}) => (
  <Dialog
    maxWidth="lg"
    open={isOpen}
    onClose={() => {
      setIsOpen(false)
    }}
    aria-labelledby="form-dialog-title"
  >
    <DialogTitle id="form-dialog-title">編成選択</DialogTitle>
    <DialogContent>
      <div className="flex flex-wrap">
        {Object.keys(CHARACTERS_INFO)
          .sort((a, b) => CHARACTERS_INFO[a].position - CHARACTERS_INFO[b].position)
          .map((key) => (
            <CharacterImage
              name={key}
              key={key}
              isSelected={tempSelectedCharacters.includes(key)}
              toggleIsSelected={toggleIsSelected}
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
        キャンセル
      </Button>
      <Button onClick={handleOK} color="primary">
        OK
      </Button>
    </DialogActions>
  </Dialog>
)

export default CharacterSelectModal
