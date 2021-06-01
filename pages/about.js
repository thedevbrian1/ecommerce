import { Typography } from "@material-ui/core";
import Layout from "../components/Layout/Layout";
import { useContext } from 'react';
import MyContext from '../context'
export default function About() {
    const theme = useContext(MyContext);
    return (
        <Layout>
            <Typography variant='h6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, id quam animi explicabo est ex molestiae ea magnam perferendis magni voluptatem assumenda, amet repudiandae vel quae adipisci debitis. Sequi sunt in, earum obcaecati similique repellendus facere quisquam, minus nesciunt odio autem adipisci, consectetur fuga ratione perferendis quod atque consequuntur iure fugiat possimus quasi mollitia illum! Veritatis culpa labore libero pariatur harum voluptatem quod itaque repellendus id, quia amet, quibusdam, incidunt sint dolor quaerat dolorem natus atque cupiditate minima nisi necessitatibus. Perferendis nesciunt voluptatem nostrum autem modi cum labore quisquam blanditiis saepe odio? Delectus recusandae architecto natus. Quas quaerat reiciendis consequatur.
            </Typography>
            <div>
                 {theme}
            </div>
        </Layout>
    )
}