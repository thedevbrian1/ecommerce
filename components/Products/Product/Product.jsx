import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

export default function Product({ product, onAddToCart }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent} > 
                    <Typography variant='h6' gutterBottom >
                        {product.name}
                    </Typography>
                    <Typography variant='h6' >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant='body2' color='textSecondary' component='div' />
                {/* <Typography variant='body2' color='textSecondary'>
                    {product.description}
                </Typography> */}
                    
                
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions} >
                <IconButton aria-label='Add to cart' onClick={()=> onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}