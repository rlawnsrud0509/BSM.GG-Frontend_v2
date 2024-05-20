import { useParams } from "next/navigation";

export const useUserParams = () => {
  const params = useParams();
  let decodeUrl = decodeURI(params.name as string);

  return decodeUrl.split("%2B");
};
