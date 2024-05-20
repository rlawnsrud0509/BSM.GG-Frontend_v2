import { gql, useSuspenseQuery } from "@apollo/client";

export const useGetUserRecordDataQuery = (parameter: string, page: number) => {
  const { data } = useSuspenseQuery(gql`
    query {
      matches(name: "${parameter}", page: ${page}) {
        matches {
          game_duration
          game_start_at
          game_type
          participants {
            assist
            champion
            champion_level
            damage
            death
            game_name
            gain_damage
            is_summoner
            kill
            items
            level
            main_perk
            sight_ward
            solo_tier
            spell1
            spell2
            sub_perk
            tag_line
            vision_score
            vision_ward
            ward
          }
          win
        }
        page
      }
    }
  `);

  return { data };
};

export const useGetUserProfileInfoQuery = (userInfoArray: string[]) => {
  const { data } = useSuspenseQuery<any>(gql`
          query {
              summoner(game_name: "${userInfoArray[0]}", tag_line: "${userInfoArray[1]}") {
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

export const useGetUserSoloRankInfoQuery = (userInfoArray: string[]) => {
  const { data } = useSuspenseQuery<any>(gql`
        query{
            summoner(game_name: "${userInfoArray[0]}", tag_line: "${userInfoArray[1]}") {
                summoner_types {
                    solo_tier
                    solo_lp
                }
            }
        }
    `);

  return { data };
};

export const useGetUserFlexRankInfoQuery = (userInfoArray: string[]) => {
  const { data } = useSuspenseQuery<any>(gql`
        query{
            summoner(game_name: "${userInfoArray[0]}", tag_line: "${userInfoArray[1]}") {
                summoner_types {
                    flex_tier
                    flex_lp
                }
            }
        }
    `);

  return { data };
};
