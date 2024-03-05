import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { HomeContainer, CardContainer } from "./home.styles";
import Header from "../../components/header/header.component";
import { MultipurposeCard } from "../../components/multipurposeCard/multipurposeCard.component";
import { PageLoader } from "../../components/loaders/loaders.component";
import MainContext from "../../services/context";

const Home = () => {
  const [loading, setLoading] = useState(false);

  const { products, setProducts, cartItems, setCartItems } =
    useContext(MainContext);

  useEffect(() => {
    // setTimeout(setLoading(true), 3000);
    setLoading(true);
    const fetchProducts = async () => {
      try {
        let response = await axios
          .get(
            "https://fdd1a65a-6bfe-4bdb-9757-9ec2dd598c43.mock.pstmn.io/api/product/"
          )
          .then(({ data }) => {
            console.log("products", data);
            setProducts(data.data);
            // const getDefaultCart = () => {
            //   let cart = {};
            //   for (let i = 1; i < data.data.length + 1; i++) {
            //     cart[i] = 0;
            //   }
            //   return cart;
            // };

            const getDefaultCart = (products) => {
              return products.reduce((acc, product) => {
                acc[product.id] = 0;
                return acc;
              }, {});
            };

            setCartItems(getDefaultCart(data.data));
          })
          .then(() => {
            setLoading(false);
          });
      } catch (err) {
        console.log("products error", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <HomeContainer>
      <Header cartItems={cartItems} />

      {loading ? (
        <PageLoader small />
      ) : (
        <CardContainer justifyContent="flex-start">
          {products?.length > 0 &&
            products
              .filter(
                (product) =>
                  product.is_service === false || product.variants.length === 0
              )
              .map(
                ({
                  id,
                  name,
                  store_product_properties,
                  is_service,
                  stock_quantity,
                }) => (
                  <MultipurposeCard
                    id={id}
                    name={name}
                    store_product_properties={store_product_properties}
                    is_service={is_service}
                    key={id}
                    stock_quantity={stock_quantity}
                  />
                )
              )}
        </CardContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
