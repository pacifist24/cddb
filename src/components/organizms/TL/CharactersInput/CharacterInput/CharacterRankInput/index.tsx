import { VFC } from 'react';
import { selectTL, changeCharacterRank } from 'ducks/tl';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import CharacterLvInputComponent from './presenter';

type Props = {
  index: number;
};

const CharacterLvInput: VFC<Props> = ({ index }) => {
  const { rank } = useAppSelector(selectTL).characters[index];
  const dispatch = useAppDispatch();
  const handleChangeCharacterRank = (value: number) =>
    dispatch(changeCharacterRank({ index, value }));

  return (
    <CharacterLvInputComponent
      rank={rank}
      changeCharacterRank={handleChangeCharacterRank}
    />
  );
};

export default CharacterLvInput;
