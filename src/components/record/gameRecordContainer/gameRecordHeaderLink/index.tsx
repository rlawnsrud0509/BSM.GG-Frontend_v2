import * as S from "./index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { GameRecordHeaderLinkProperties } from "@/types/components/GameRecordHeaderLinkProperties.type";
import { theme } from "@/style/base/theme/index.css";

const GameRecordHeaderLink = ({
  linkText,
  selectedLink,
  ...restType
}: GameRecordHeaderLinkProperties) => {
  return (
    <button
      {...restType}
      style={assignInlineVars({
        [S.ChangeGametypeButtonBackground]:
          linkText === selectedLink ? theme.gray[100] : theme.base.white,
        [S.ChangeGametypeButtonColor]:
          linkText === selectedLink ? theme.gray[800] : theme.gray[400],
      })}
      className={S.ChangeGametypeButton}
    >
      {linkText}
    </button>
  );
};

export default GameRecordHeaderLink;
