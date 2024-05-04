import { ItemListBoxProperties } from "@/types/components/ItemListBoxProperties.type";
import * as S from "./index.css";

const ItemListBox = ({ ItemList }: ItemListBoxProperties) => {
  return (
    <div className={S.Container}>
      {ItemList.map((e) => (
        <img src={e} alt="ee" className={S.ItemImg}></img>
      ))}
    </div>
  );
};

export default ItemListBox;
