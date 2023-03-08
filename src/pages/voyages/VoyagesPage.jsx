import classes from './voyagePage.module.css'
import { useSelector } from 'react-redux'



// Non fonctionnel
const VoyagesPage = () => {
    const countries = useSelector(state=>state.voyages.data)
    const trip = countries.map(country=>country.voyages)
    const tripTendency = trip.filter(trip=>trip.tendance === true)

    return (
        <>
        <h1 className={classes.title} >OUR TENDENCY TRIP 😎</h1>
        <ul>
        {tripTendency.map(trip=>(
            <p>trip: {trip.name}</p>
            
            ))}
        </ul>
            </>
    )
}



export default VoyagesPage