import { VFC } from 'react';
import { selectTL, changeCharacterLv } from 'ducks/tl';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import CharacterLvInputComponent from './presenter';

type Props = {
  index: number;
};

const CharacterLvInput: VFC<Props> = ({ index }) => {
  const { lv } = useAppSelector(selectTL).characters[index];
  const dispatch = useAppDispatch();
  const handleChangeCharacterLv = (value: number) =>
    dispatch(changeCharacterLv({ index, value }));

  return (
    <CharacterLvInputComponent
      lv={lv}
      changeCharacterLv={handleChangeCharacterLv}
    />
  );
};

export default CharacterLvInput;
