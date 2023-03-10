import classes from './voyagePage.module.css'
import { useSelector } from 'react-redux'

const VoyagesPage = () => {
    const countries = useSelector(state=>state.voyages.data)
    function getTrips (arr) {
        let trips = [];
        for (let i = 0; i < arr.length; i++) {
            trips.push(arr[i].voyages)
        }
        return trips
    }

    const trip = getTrips(countries).flat()
    const tripTendency = trip.filter(trip=>trip.tendance === true)

    return (
        <>
        <h1 className={classes.title} >OUR TENDENCY TRIP 😎</h1>
        <ul>
        {tripTendency.map(trip=>(
            <p className={classes.card} >{trip.name} ({trip.desc}) {trip.selected && '✔'}</p>
        ))}
        </ul>
            </>
    )
}

export default VoyagesPage