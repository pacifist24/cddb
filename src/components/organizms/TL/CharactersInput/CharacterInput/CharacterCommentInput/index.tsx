import { VFC } from 'react';
import { selectTL, changeCharacterComment } from 'ducks/tl';
import { useAppSelector, useAppDispatch } from 'app/hooks';
import CharacterCommentInputComponent from './presenter';

type Props = {
  index: number;
};

const CharacterCommentInput: VFC<Props> = ({ index }) => {
  const { comment } = useAppSelector(selectTL).characters[index];
  const dispatch = useAppDispatch();
  const handleChangeCharacterComment = (value: string) =>
    dispatch(changeCharacterComment({ index, value }));

  return (
    <CharacterCommentInputComponent
      comment={comment}
      changeCharacterComment={handleChangeCharacterComment}
    />
  );
};

export default CharacterCommentInput;
