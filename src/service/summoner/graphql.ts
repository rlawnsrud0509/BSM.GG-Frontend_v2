import { getItem } from "@/utils/localStorage";
import { gql, useSuspenseQuery } from "@apollo/client";

export const useGetSummonerbaseInfoQuery = () => {
  const game_name = getItem("game_name");
  const tag_line = getItem("tag_line");

  const { data } = useSuspenseQuery<any>(gql`
        query {
            summoner(game_name: "${game_name}", tag_line: "${tag_line}") {
              summoner_types {
                game_name,
                tag_line,
                profile_icon,
                level,
                ranking,
                rank_point,
                name,
                grade,
                class_no,
                student_no
              },
              user_count
            }
        }
    `);

  return { data };
};
