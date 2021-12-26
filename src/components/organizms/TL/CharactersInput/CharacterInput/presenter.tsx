import { VFC } from 'react'
import { Character } from 'ducks/tl'
import CharacterStarInput from './CharacterStarInput'
import CharacterLvInput from './CharacterLvInput'
import CharacterLvRank from './CharacterRankInput'
import CharacterSpecialLvInput from './CharacterSpecialLvInput'
import CharacterCommentInput from './CharacterCommentInput'

type Props = {
  character: Character
  isCharactersSelected: boolean
  handleChangeCharacterComment: (comment: string) => void
  handleChangeCharacterStar: (star: number) => void
  handleChangeCharacterSpecialLv: (specialLv: number) => void
  handleChangeCharacterRank: (rank: number) => void
  handleChangeCharacterLv: (lv: number) => void
  maxStar: number
}

const CharacterInput: VFC<Props> = ({
  character,
  isCharactersSelected,
  handleChangeCharacterComment,
  handleChangeCharacterStar,
  handleChangeCharacterSpecialLv,
  handleChangeCharacterRank,
  handleChangeCharacterLv,
  maxStar,
}) => (
  <div className="flex items-center rounded-md">
    {isCharactersSelected && (
      <img src={`/characters/${character.name}.png`} className="w-11 h-11" alt="" />
    )}
    {!isCharactersSelected && <img src="/empty2.png" className="w-11 h-11" alt="" />}
    <CharacterStarInput
      star={character.star}
      maxStar={maxStar}
      changeCharacterStar={handleChangeCharacterStar}
      isCharactersSelected={isCharactersSelected}
    />
    <CharacterLvRank
      rank={character.rank}
      changeCharacterRank={handleChangeCharacterRank}
      isCharactersSelected={isCharactersSelected}
    />
    <CharacterSpecialLvInput
      specialLv={character.specialLv}
      changeCharacterSpecialLv={handleChangeCharacterSpecialLv}
      isCharactersSelected={isCharactersSelected}
    />
    <CharacterLvInput
      lv={character.lv}
      changeCharacterLv={handleChangeCharacterLv}
      isCharactersSelected={isCharactersSelected}
    />
    <div className="flex-1 mr-3">
      <CharacterCommentInput
        comment={character.comment}
        changeCharacterComment={handleChangeCharacterComment}
        isCharactersSelected={isCharactersSelected}
      />
    </div>
  </div>
)

export default CharacterInput
