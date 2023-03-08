import { useState } from 'react';
import { useSelector } from 'react-redux'
import classes from './paysList.module.css'

const PaysList = () => {
    const [displayDetail, setDisplayDetail] = useState(false)

    const countries = useSelector(state=>state.voyages.data)
    // const favorite = <span className={classes.favorite} >☝️</span>

    const toggleDisplay =() =>{
        displayDetail ? setDisplayDetail(false) : setDisplayDetail(true)
    }

    return (
        <ul>
        {countries.map(country=>(
            <div  className={classes.ctn}>
                <ul className={classes.card} >
                    <div>
                        <li key={country.id} onClick={toggleDisplay}>
                        {country.countries} ({country.voyages.length>0 ? `${country.voyages.length} trip(s) available`: 'coming soon'})
                        </li>
                    {displayDetail && (
                        <div>
                            {/* ({country.voyages.length>0 ? {country.voyages.map(city=> `${city.name},`)} : 'coming soon'}) */}
                            <p>City visited : {country.voyages.map(city=> `${city.name},`)}</p>
                            <p>Descrption : {country.voyages.map(city=>`${city.desc},`)}</p>
                        </div>
                    )}
                    </div>
                </ul>
            </div>
            ))}
        </ul>
    )
}



export default PaysList