export interface UserChampionDetailInfoProperties {
  assists: number;
  damage: number;
  championLevel: number;
  deaths: number;
  gainDamage: number;
  gameName: string;
  kills: number;
  killRate: number;
  level: number;
  sightWard: number;
  soloTier: string;
  soloPoint: number;
  visionScore: number;
  tagLine: string;
  visionWard: number;
  cs: number;
  team: string;
  champion: {
    id: number;
    name: string;
  };
  ward: {
    id: number;
    name: string;
  };
  items: {
    id: number;
    name: string;
  }[];
  spell1: {
    id: number | string;
    name: string;
  };
  spell2: {
    id: number | string;
    name: string;
  };
  mainPerk: {
    id: number | string;
    name: string;
  };
  subPerk: {
    id: number | string;
    name: string;
  };
}
