import { Grid } from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'
export default function Products({ products, onAddToCart }) {
    const classes = useStyles();

    // const products = [
    //     { id: 1, name: 'Shoes', description: 'Running Shoes', price: 'KES 2,000', image: 'https://wallpapercave.com/wp/Wshl7HG.jpg'},
    //     { id: 2, name: 'Macbook', description: 'Macbook Air', price: 'KES 300,000', image: 'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBtMXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    //     { id: 3, name: 'Omen', description: 'HP Omen 15', price: 'KES 180,000', image: 'https://wallpapercave.com/wp/wp2513513.jpg'}
    // ]
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}