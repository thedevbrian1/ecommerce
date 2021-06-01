import '../styles/globals.css'
// import { useState } from 'react'
import { commerce } from '../lib/commerce'

function MyApp({ Component, pageProps }) {
  // const [cart, setCart] = useState({});

  return <Component {...pageProps}  />
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//      const cartData = await commerce.cart.retrieve();
//     //  setCart(cartData);
//      let pageProps = {};
//      if (Component.getInitialProps) {
//        pageProps = await Component.getInitialProps(ctx);
//      }
//      return { pageProps, cartData };
// }
export default MyApp
