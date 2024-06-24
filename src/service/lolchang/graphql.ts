import { LolchangUserScoreContainerProperties } from "@/types/components/LolchangInfoContainerProperties.type";
import { LolchangSummonerInfoProperties } from "@/types/components/LolchangSummonerInfoProperties.type";
import { gql, useSuspenseQuery } from "@apollo/client";

export const useGetLolchangInfoQuery = () => {
  const { data, ...restData } = useSuspenseQuery<LolchangUserScoreContainerProperties>(gql`
    query {
      getChang {
        changInfo {
          assists
          cs
          damage
          deaths
          gainDamage
          goldSpent
          kills
          loseGames
          playTime
          playedGames
          skillUse
          spellUse
          visionScore
          wardPlaced
          winGames
        }
      }
    }
  `);

  return { data, ...restData };
};

export const useGetLolchangSummonerQuery = () => {
  const { data, ...restData } = useSuspenseQuery<LolchangSummonerInfoProperties>(gql`
    query {
      getChang {
        summonerInfo {
          classNo
          gameName
          grade
          level
          name
          profileIcon
          ranking
          soloLoses
          soloLp
          soloTier
          soloWins
          studentNo
          tagLine
          userCount
          mostChampions {
            id
            name
          }
        }
      }
    }
  `);

  return { data, ...restData };
};
