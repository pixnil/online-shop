import React, { FunctionComponent } from "react";
import { GetStaticProps } from "next";
import sellerData from "../data/sellers.json";
// import axios from "axios";

import Header from "../components/Header/Header";

import Sellers from './../components/Sellers/Sellers';

const Home: FunctionComponent<{ sellers: any }> = ({ sellers }) => {
  
  return (
    <>
      <Header renderCart={false} renderSearch={false} />
      <Sellers
        sellersList={sellers}
      />
    </>
  );
};
export default Home;

export const getStaticProps: GetStaticProps = async () => {
  /*const url =
    "https://script.google.com/macros/s/AKfycbwrtpxP95JWg2GghdxdxXDltiL101EWGhOGaJZZ0rRmedAow0t4hrQ4/exec";
  // const res = await axios.get(url);
  const res = await fetch(url);

  const data = await res.json();
  // const data = await res.data; */
  // Get all available sellers from db

  return { props: { sellers: sellerData } };
};
