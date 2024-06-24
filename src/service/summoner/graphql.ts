import { UserInfoSectionProperties } from "@/types/components/userInfoSectionProperties.type";
import { gql, useSuspenseQuery } from "@apollo/client";

export const useGetSummonerbaseInfoQuery = () => {
  const { data } = useSuspenseQuery<UserInfoSectionProperties>(gql`
    query {
      getSummoner {
        gameName
        tagLine
        profileIcon
        level
        ranking
        soloPoint
        soloTier
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
