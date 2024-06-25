"use client";

import * as S from "./index.css";
import LolchangUserScoreContainer from "./lolchangUserScoreContainer";
import LolchangScoreGridLayoutContainer from "../lolchangScoreGridLayoutContainer";
import { getRandomNumber } from "@/utils";
import { useEffect, useState } from "react";
import { useGetLolchangInfoQuery } from "@/service/lolchang/graphql";

const LolchangScoreGridContainer = () => {
  const { data } = useGetLolchangInfoQuery();
  const [randNumArray, setRandNumArray] = useState<number[]>([]);

  const changArray = Object.keys(data.getChang.changInfo).filter((e) => e !== "__typename");

  useEffect(() => {
    setRandNumArray(getRandomNumber(9, Object.keys(data.getChang.changInfo).length - 2));
  }, []);

  return (
    <>
      {randNumArray.length ? (
        <div className={S.Container}>
          {data.getChang.changInfo &&
            randNumArray.map((e) => {
              return (
                <LolchangUserScoreContainer
                  mainKey={changArray[e]}
                  mainText={data.getChang.changInfo[changArray[e]]}
                  key={`lolchangScore${e}`}
                />
              );
            })}
        </div>
      ) : (
        <LolchangScoreGridLayoutContainer />
      )}
    </>
  );
};

export default LolchangScoreGridContainer;
