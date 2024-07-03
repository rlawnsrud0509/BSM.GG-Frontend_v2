import { ROUTE, ROUTENAME } from "@/constants/router";
import { theme } from "@/style/base/theme/index.css";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { usePathname } from "next/navigation";

import * as S from "./index.css";
import Link from "next/link";

const HeaderLink = ({ routeName }: { routeName: string }) => {
  const pathname = usePathname();

  return (
    <Link
      style={assignInlineVars({
        [S.LinkColor]: pathname === ROUTE[routeName] ? theme.gray[800] : theme.gray[400],
        [S.LinkBackgroundColor]: pathname === ROUTE[routeName] ? theme.gray[100] : theme.base.white,
      })}
      href={ROUTE[routeName]}
      className={S.Link}
    >
      {ROUTENAME[routeName]}
    </Link>
  );
};

export default HeaderLink;
