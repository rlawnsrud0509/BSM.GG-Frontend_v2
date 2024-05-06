import { ItemListBoxProperties } from "@/types/components/ItemListBoxProperties.type";
import * as S from "./index.css";

const ItemListBox = ({ ItemList }: ItemListBoxProperties) => {
  return (
    <div className={S.Container}>
      {ItemList.map((e, i) => (
        <img key={`ItemList${i}`} src={e} alt="ItemImg" className={S.ItemImg}></img>
      ))}
    </div>
  );
};

export default ItemListBox;
