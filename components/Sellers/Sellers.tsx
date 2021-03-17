import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SellerItem from "./SellerItem/SellerItem";
import NoResults from "../empty-states/NoResults/NoResults";
import styles from "./Sellers.module.scss";

type Props = {
  sellersList: any
};

const Sellers = ({ sellersList }: Props) => {

  const sellersData = sellersList
    .map((product) => {
      return (
        <CSSTransition
          key={product.id}
          classNames="fadeIn"
          timeout={{
            enter: 300,
            exit: 500,
          }}
        >
          <SellerItem
            // key={product.id}
            price={product.price}
            name={product.name}
            image={product.image}
            id={parseInt(product.id, 10)}
            // productQuantity={props.productQuantity}
          />
        </CSSTransition>
      );
    });

  // Empty and Loading States
  let view;
  // if (productsData.length <= 0 && !term) {
  //   view = <LoadingProducts />;
  // } else
  if (sellersData.length <= 0) {
    view = <NoResults />;
  } else {
    view = (
      <TransitionGroup component="div" className={styles.products}>
        {sellersData}
      </TransitionGroup>
    );
  }
  return <div className={styles.productsWrapper}>{view}</div>;
};

export default Sellers;
