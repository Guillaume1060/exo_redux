import { NavLink } from "react-router-dom";
import classes from './navBar.module.css'

const NavBar = () => {
    return (
        
        <div className={classes.links} >
            <h2 className={classes.title} >React Your dreams</h2>
        <div className={classes.nav}>
            <NavLink className={classes.link} to={"/"}>Home</NavLink>
            <NavLink className={classes.link} to={"/pays"}>Countries</NavLink>
            <NavLink className={classes.link} to={"/voyages"}>Our travels</NavLink>
            <NavLink className={classes.link} to={"/"}>Your travel(s)</NavLink>
        </div>
        </div>
        
    )
}


export default NavBar