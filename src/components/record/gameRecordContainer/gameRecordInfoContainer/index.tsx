import * as S from "./index.css";
import GameRecordDetailContainer from "./gameRecordDetailContainer";
import GameRecordPreviewContainer from "./gameRecordPreviewContainer";
import { GameRecordInfoContainerProperties } from "@/types/components/GameRecordInfoContainerProperties.type";

import { useToggle } from "./index.hooks";
import { useParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const GameRecordInfoContainer = ({
  index = 0,
  ...matchData
}: GameRecordInfoContainerProperties) => {
  const { state, toggle } = useToggle(false);

  const params = useParams().name as string;
  const userGameName = decodeURIComponent(params.split("-")[0]);
  const userTagLine = decodeURIComponent(params.split("-")[1]);
  const [userIndex, setUserIndex] = useState(0);

  useLayoutEffect(() => {
    matchData.participants.forEach((e, i) => {
      e.gameName === userGameName && e.tagLine === userTagLine ? setUserIndex(i) : null;
    });
  }, [matchData]);

  return (
    <div className={S.Container}>
      <GameRecordPreviewContainer
        {...matchData}
        index={index}
        state={state}
        clickFn={toggle}
        userIndex={userIndex}
      />
      {state && <GameRecordDetailContainer {...matchData} />}
    </div>
  );
};

export default GameRecordInfoContainer;
