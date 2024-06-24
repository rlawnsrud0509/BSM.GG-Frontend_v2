import { RankingInfoProperties } from "@/types/components/RankingInfoProperties.type";
import { gql, useSuspenseQuery } from "@apollo/client";

export const useGetRankingInfoQuery = (page: number) => {
  const { data } = useSuspenseQuery<RankingInfoProperties>(gql`
    query{
        getRanking(page: ${page}) {
            summonerResponseDto {
                classNo
                gameName
                grade
                name
                profileIcon
                ranking
                soloLp
                soloTier
                soloWins
                soloLoses
                tagLine
                studentNo
                mostChampions {
                  id
                  name
                }
            }
        }
    }
`);

  return { data };
};
