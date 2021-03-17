import React, { useState } from "react";
import styles from "./SellerItem.module.scss";
import { useRouter } from 'next/router';
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable consistent-return */
/* eslint-disable  jsx-a11y/no-static-element-interactions */
/* eslint-disable  jsx-a11y/interactive-supports-focus */

type Props = {
  id: number;
  price: number;
  image: string;
  name: string;
};

const SellerItem = ({
  id,
  price,
  image,
  name,
}: Props) => {
  const [quantity, updateQuantity] = useState<number>(1);
  const router = useRouter();

  const showSellingItems = (sellerId: number) => {
    router.push('/seller/2')
  };

  // let quantity = props.productQuantity;
  return (
    <div className={styles.productWrapper}>
      <div className={styles.product}>
        <div className={styles.outline}>
          <div
            className={styles.productImage}
            role="button"
          >
            <img src={image} alt={name} />
          </div>
          <h4 className={styles.productName}>{`${name}`}</h4>
          {/*<p className={styles.productPrice}>{price}</p>*/}
          <div className={styles.productAction}>
            <button
              className={styles.added}
              type="button"
              onClick={() =>
                showSellingItems(id)
              }
            >
              Visit Shop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerItem;
