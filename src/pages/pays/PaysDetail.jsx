import  classes  from './paysDetail.module.css'
import  {Link, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { saveVoyage } from '../../store/actions/voyages.actions'

const PaysDetail = () => {
    const {paysId} = useParams()
    const countries = useSelector(state=>state.voyages.data)
    const country = countries.find(country=>country.id==paysId)  
    const dispatch = useDispatch()

    const saveHandler = (e) => {
        e.preventDefault()
        dispatch(saveVoyage)
    }

    return (
        <>
        <Link to="/pays" className={classes.card}>
           <h2>{country.countries}</h2> 
           {country.voyages.length>0 && 
           country.voyages.map(country=> 
                    <div>
                        <div>{country.name} ({country.desc} )</div>
                        <button onClick={saveHandler}>Save / Unsaved</button>
                    </div>)}
        </Link>
        </>
    )
}


export default PaysDetail