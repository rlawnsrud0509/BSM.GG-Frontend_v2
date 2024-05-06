import { ButtonHTMLAttributes } from "react";

export interface GameRecordHeaderLinkProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  linkText: string;
  selectedLink: string;
}
