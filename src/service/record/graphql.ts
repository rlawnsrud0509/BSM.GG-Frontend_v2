import { GameRecordInfoProperties } from "@/types/components/GameRecordInfoProperties.type";
import { UserInfoSectionProperties } from "@/types/components/userInfoSectionProperties.type";
import { gql, useSuspenseQuery } from "@apollo/client";

export const useGetUserRecordDataQuery = (gameType: string, parameter: string, page: number) => {
  const { data, refetch } = useSuspenseQuery<GameRecordInfoProperties>(gql`
    query {
      getMatches(name: "${parameter}", gameType: "${gameType}", page: ${page}) {
        matches{
            gameDuration,
            gameStartedAt,
            gameType,
            isWin,
            participants {
              assists,
              damage,
              championLevel,
              deaths,
              gainDamage,
              gameName,
              kills,
              killRate,
              level,
              sightWard,
              soloTier,
              soloPoint,
              tagLine,
              visionWard,
              visionScore,
              team,
              cs,
              flexPoint,
              flexTier,
              champion {
                id,
                name,
              },
              ward {
                id,
                name,
              },
              spell1 {
                id,
                name,
              },
              spell2 {
                id,
                name,
              },
              items {
                id,
                name,
              },
              mainPerk {
                id,
                name,
              },
              subPerk {
                id,
                name,
              }
            }
          }
        }
    }
  `);

  return { data, refetch };
};

export const useGetUserProfileInfoQuery = (parameter: string[]) => {
  const { data } = useSuspenseQuery<UserInfoSectionProperties>(gql`
    query {
      getSummoner(name: "${parameter}") {
        gameName
        tagLine
        profileIcon
        level
        ranking
        soloPoint
        name
        grade
        classNo
        studentNo
        userCount
      }
    }
  `);

  return { data };
};

export const useGetUserSoloRankInfoQuery = (parameter: string[]) => {
  const { data } = useSuspenseQuery<UserInfoSectionProperties>(gql`
    query {
      getSummoner(name: "${parameter}") {
        soloTier
        soloLp
      }
    }
  `);

  return { data };
};

export const useGetUserFlexRankInfoQuery = (parameter: string[]) => {
  const { data } = useSuspenseQuery<UserInfoSectionProperties>(gql`
    query {
      getSummoner(name: "${parameter}") {
        flexTier
        flexLp
      }
    }
  `);

  return { data };
};
