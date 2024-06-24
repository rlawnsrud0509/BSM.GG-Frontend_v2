import { GameRecordInfoContainerProperties } from "./GameRecordInfoContainerProperties.type";

export interface GameRecordPreviewContainerProperties extends GameRecordInfoContainerProperties {
  clickFn: any;
  state: boolean;
}
