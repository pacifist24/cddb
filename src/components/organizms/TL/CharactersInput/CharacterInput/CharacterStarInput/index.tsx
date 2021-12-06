import { VFC } from 'react';
import { selectTL, changeCharacterStar } from 'ducks/tl';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import { CHARACTERS_INFO } from 'lib/gameConstants';
import CharacterStarInputComponent from './presenter';

type Props = {
  index: number;
};

const CharacterStarInput: VFC<Props> = ({ index }) => {
  const { star, name } = useAppSelector(selectTL).characters[index];
  const { maxStar } = CHARACTERS_INFO[name];
  const dispatch = useAppDispatch();
  const handleChangeCharacterStar = (value: number) =>
    dispatch(changeCharacterStar({ index, value }));

  return (
    <CharacterStarInputComponent
      star={star}
      maxStar={maxStar}
      changeCharacterStar={handleChangeCharacterStar}
    />
  );
};

export default CharacterStarInput;
