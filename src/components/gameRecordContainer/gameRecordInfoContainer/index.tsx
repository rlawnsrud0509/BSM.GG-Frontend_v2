import GameRecordDetailContainer from "./gameRecordDetailContainer";
import GameRecordPreviewContainer from "./gameRecordPreviewContainer";
import * as S from "./index.css";
import { useToggle } from "./index.hooks";

const GameRecordInfoContainer = () => {
  const { state, toggle } = useToggle(false);

  return (
    <div className={S.Container}>
      <GameRecordPreviewContainer state={state} clickFn={toggle} />
      {state && <GameRecordDetailContainer />}
    </div>
  );
};

export default GameRecordInfoContainer;
