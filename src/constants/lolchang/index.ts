import { ContainerTextColor } from "@/components/lolchang/lolchangScoreGridContainer/lolchangUserScoreContainer/index.css";
import { theme } from "@/style/base/theme/index.css";
import { LolchangMappingDataProperties } from "@/types/constants/LolchangMappingDataProperties.type";

export const OnelineReview = [
  "롤 대신 더 생산적인 활동을 하는 것이 어떨까요?",
  "최근 한 달간 밖에 나가본 적이 있나요?",
  "나가서 좀 뛰는 것은 어떨까요?",
  "부모님 마음은 생각 안 해 보셨나요?",
  "롤이 인생인가요?",
  "인생이 망했다고 한번쯤 생각 해 본적은 없나요?",
  "평생 그렇게 롤대남으로 살 건가요?",
  "억장이 와르르~",
  "니 시험평균보다 니 롤LP가 더높다에 팔한짝검",
  "롤 하려고 부산소프트웨어 마이스터고등학교에 입학했나요?",
  "코딩 공부는 하지 않을 건가요?",
  "롤이 밥 먹여줄 것 같나요?",
  "평생 그 티어일 텐데 왜 자꾸 롤 하나요?",
  "본인의 한계를 아직도 깨닫지 못한건가요?",
  "혹시 JWT는 쓸 줄 알면서 판수를 그렇게 박는건가요?",
  "자네 React Suspense는 알고있으면서 롤을 그렇게 하는건가?",
  "지금까지 롤에 얼마를 쏟아부었는지 천천히 곱씹어보세요",
  "이렇게 놀다간 결국 뺑이쳐야하는 날이 올걸세",
  "잠깐의 행복을 위해 미래를 포기하지 말아요ㅜㅜ",
];

export const LolchangScoreMappingData: LolchangMappingDataProperties = {
  assists: {
    mainUnitText: "번",
    resultText: "어시스트를 기록했습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  cs: {
    mainUnitText: "번",
    resultText: "미니언을 처치했습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  kills: {
    mainUnitText: "번",
    resultText: "챔피언을 처치했습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  deaths: {
    mainUnitText: "번",
    resultText: "죽었습니다",
    containerColor: theme.secondary[400],
    ContainerTextColor: theme.base.white,
  },
  damage: {
    mainUnitText: "",
    resultText: "데미지를 입혔습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  gainDamage: {
    mainUnitText: "",
    resultText: "데미지를 입었습니다",
    containerColor: theme.secondary[400],
    ContainerTextColor: theme.base.white,
  },
  goldSpent: {
    mainUnitText: "",
    resultText: "골드를 소모했습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  loseGames: {
    mainUnitText: "번",
    resultText: "패배했습니다",
    containerColor: theme.secondary[400],
    ContainerTextColor: theme.base.white,
  },
  winGames: {
    mainUnitText: "번",
    resultText: "승리했습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  playTime: {
    mainUnitText: "초",
    resultText: "동안 게임했습니다",
    containerColor: theme.secondary[400],
    ContainerTextColor: theme.base.white,
  },
  playedGames: {
    mainUnitText: "판",
    resultText: "게임을 했습니다",
    containerColor: theme.secondary[400],
    ContainerTextColor: theme.base.white,
  },
  skillUse: {
    mainUnitText: "번",
    resultText: "스킬을 사용하였습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  spellUse: {
    mainUnitText: "번",
    resultText: "소환사 주문을 사용하였습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  visionScore: {
    mainUnitText: "",
    resultText: "시야점수를 기록했습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
  wardPlaced: {
    mainUnitText: "번",
    resultText: "와드를 박았습니다",
    containerColor: theme.primary[400],
    ContainerTextColor: theme.base.white,
  },
};
