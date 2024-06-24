export interface UserInfoSectionProperties {
  getSummoner: {
    [key: string]: string | number;
    gameName: string;
    tagLine: string;
    profileIcon: string;
    level: number;
    ranking: number;
    soloPoint: number;
    soloTier: string;
    name: string;
    grade: number;
    classNo: number;
    studentNo: number;
    userCount: number;
  };
}
