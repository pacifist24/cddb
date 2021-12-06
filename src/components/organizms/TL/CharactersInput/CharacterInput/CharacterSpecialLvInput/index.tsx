import { VFC } from 'react';
import { selectTL, changeCharacterSpecialLv } from 'ducks/tl';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import CharacterLvInputComponent from './presenter';

type Props = {
  index: number;
};

const CharacterLvInput: VFC<Props> = ({ index }) => {
  const { specialLv } = useAppSelector(selectTL).characters[index];
  const dispatch = useAppDispatch();
  const handleChangeCharacterSpecialLv = (value: number) =>
    dispatch(changeCharacterSpecialLv({ index, value }));

  return (
    <CharacterLvInputComponent
      specialLv={specialLv}
      changeCharacterSpecialLv={handleChangeCharacterSpecialLv}
    />
  );
};

export default CharacterLvInput;
