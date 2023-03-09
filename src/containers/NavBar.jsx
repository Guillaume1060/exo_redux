import { NavLink, Link } from "react-router-dom";
import classes from './navBar.module.css'

const NavBar = () => {
    return (
        
        <div className={classes.links} >
            <Link to={"/"} className={classes.home}><h2 className={classes.title} >REACT YOUR DREAMS</h2></Link>
        <div className={classes.nav}>
            <NavLink className={classes.link} to={"/pays"}>Countries</NavLink>
            <NavLink className={classes.link} to={"/voyages"}>Our travels</NavLink>
            <NavLink className={classes.link} to={"/myTravel"}>Your travel(s)</NavLink>
            <NavLink className={classes.admin} to={"/admin"}>Admin</NavLink>
        </div>
        </div>
        
    )
}


export default NavBar