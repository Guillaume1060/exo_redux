import { Outlet } from "react-router-dom";
import classes from './paysPage.module.css'

const PaysPage = () => {
    return (
        <>
        <h1 className={classes.title} >OUR COUNTRIES AVAILABLE <span>(click for details)</span></h1>
        {/* // Below for admin
        // <link to="add">Add a country</link> */}
        <Outlet />
        </>
    )
}


export default PaysPage