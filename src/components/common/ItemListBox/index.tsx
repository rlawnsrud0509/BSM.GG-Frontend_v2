import { ItemListBoxProperties } from "@/types/components/ItemListBoxProperties.type";
import Image from "next/image";
import * as S from "./index.css";

const ItemListBox = ({ itemList, ward }: ItemListBoxProperties) => {
  return (
    <div className={S.Container}>
      {itemList.map((e, i) =>
        e.id !== 0 ? (
          <div key={`ItemList${i}`} className={S.ItemImg}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}item/${e.id}.png`}
              alt="ItemImg"
              fill
              sizes="100%"
            />
          </div>
        ) : (
          <div className={S.EmptyItemImg} key={`ItemList${i}`} />
        ),
      )}
      {ward.id !== 0 ? (
        <div className={S.WardImg}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}item/${ward.id}.png`}
            alt="wardImg"
            fill
            sizes="100%"
          />
        </div>
      ) : (
        <div className={S.WardImg} />
      )}
    </div>
  );
};

export default ItemListBox;
