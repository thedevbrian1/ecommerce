import { useState, useEffect, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import Products from '../components/Products/Products'
// import styles from '../styles/Home.module.css'
import { Products, NavBar } from '../components'
import Cart from './cart/'
import { commerce } from '../lib/commerce'
import Layout from '../components/Layout/Layout'
import MyContext from '../context'
import { Typography } from '@material-ui/core'

function Home({ products }) {
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  // const fetchProducts = async () => {
  //   const { data } = await commerce.products.list();
  //   setProducts(data);
  // };

  // const fetchCart = async () => {
  //   setCart(await commerce.cart.retrieve());
  // };

  // const emptyCart = async () => {
  //   await commerce.cart.empty();
  // };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart)
    console.log(item.cart)
  };

  // useEffect(() => {
  //   fetchProducts();
  //   fetchCart();
  //   emptyCart();
  // }, []);

  const theme = useContext(MyContext);

  console.log(`Product name :${products[0]}`);
  return (
    <div>
      <Layout>
      {/* <NavBar totalItems={cart.total_items} cart={cart} /> */}
      {/* <h1>{theme}</h1> */}
      
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart />
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    }
  }
}

export default Home;
