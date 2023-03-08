import classes from './home.module.css'
import { useSelector } from 'react-redux'


const HomePage = () => {
    const nbrCountries = useSelector(state=>state.voyages.data.length)
    const nbTravels = useSelector(state=>state.voyages.data.reduce((acc,cur)=>acc+cur.voyages.length,0))
    return (
        <div className={classes.page}>
        <div className={classes.ctn} >
            <img className={classes.img} src="https://img.freepik.com/vecteurs-libre/logo-voyage-detaille_23-2148616611.jpg?w=740&t=st=1678292045~exp=1678292645~hmac=585308d33f327614cad8c7ca4655ac195027a70a0a17b9a6d6b1e26abfbc3e2e" height="160" width="160" alt='logo'/>
            <h1 className={classes.title} >Find your destination among our {nbTravels} travels available in {nbrCountries} countries  !</h1>
        </div>
        <p className={classes.para}></p>
        </div>
    )
}


export default HomePage