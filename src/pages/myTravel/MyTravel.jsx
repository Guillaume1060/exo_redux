import { useSelector } from "react-redux";
import classes from './myTravel.module.css'

const MyTravel = () => {
    const countries = useSelector(state=>state.voyages.data)
    function getTrips (arr) {
        let trips = [];
        for (let i = 0; i < arr.length; i++) {
            trips.push(arr[i].voyages)
        }
        return trips
    }

    const trip = getTrips(countries).flat()
    const tripTendency = trip.filter(trip=>trip.selected === true)

    return (
        <>
        <h1 className={classes.title}>YOUR TRIPS PLANNED</h1>
        <ul>
        {tripTendency.map(trip=>(
            <p className={classes.card} >{trip.name} ({trip.desc})</p>
            
            ))}
        </ul>
            </>
    )
}



export default MyTravel