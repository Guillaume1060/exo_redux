import classes from './home.module.css'
import { useSelector } from 'react-redux'


const HomePage = () => {
    const nbrCountries = useSelector(state=>state.voyages.data.length)
    return (
        <div className={classes.page}>
        <div className={classes.ctn} >
            <img src="exo_redux/src/photos/travel" alt='logo'/>
            <h1 className={classes.title} >REACT YOUR DREAMS</h1>
        </div>
        <p className={classes.para}>Find your destination among our {nbrCountries} travels available in {nbrCountries} countries  !</p>
        </div>
    )
}


export default HomePage