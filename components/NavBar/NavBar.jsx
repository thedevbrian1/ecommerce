import Link from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Toolbar, IconButton, Badge, MenuIcon, Menu, Typography, Icon } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './styles'

export default function NavBar({ totalItems, cart }) {
    const classes = useStyles();
    const router = useRouter();
    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography>
                        <img src="https://image.flaticon.com/icons/png/128/44/44300.png" alt="Notnice Shop" height="25px" className={classes.image} />
                        Notnice Shop
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        {/* <Link href="/cart" passHref> */}
                            <IconButton aria-label='Show cart items' color='inherit' onClick={() => router.push({pathname: '/cart', query: cart})}>
                                <Badge badgeContent={totalItems} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        {/* </Link> */}
                    </div>
                </Toolbar>

            </AppBar>
        </>
    )
}