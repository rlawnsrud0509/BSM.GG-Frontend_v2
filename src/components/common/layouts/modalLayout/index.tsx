import * as S from "./index.css";
import { LayoutProperties } from "@/types/components/common/LayoutProperties.type";

const ModalLayout = ({ children }: LayoutProperties) => {
  return <div className={S.Container}>{children}</div>;
};

export default ModalLayout;
