import { ChangeEvent, useState } from "react";

export const useInput = (
  initalValue: string,
): [string, (e: ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState(initalValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handleChange];
};
