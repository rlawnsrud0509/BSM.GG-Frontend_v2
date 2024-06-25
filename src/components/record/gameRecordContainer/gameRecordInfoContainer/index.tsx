import * as S from "./index.css";
import GameRecordDetailContainer from "./gameRecordDetailContainer";
import GameRecordPreviewContainer from "./gameRecordPreviewContainer";
import { GameRecordInfoContainerProperties } from "@/types/components/GameRecordInfoContainerProperties.type";

import { useToggle } from "./index.hooks";

const GameRecordInfoContainer = ({ ...matchData }: GameRecordInfoContainerProperties) => {
  const { state, toggle } = useToggle(false);

  return (
    <div className={S.Container}>
      <GameRecordPreviewContainer {...matchData} state={state} clickFn={toggle} />
      {state && <GameRecordDetailContainer {...matchData} />}
    </div>
  );
};

export default GameRecordInfoContainer;
