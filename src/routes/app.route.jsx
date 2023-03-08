import HomePage from "../pages/home/Home"
import PaysPage from "../pages/pays/PaysPage"
import VoyagesPage from "../pages/voyages/VoyagesPage"
import PaysList from "../pages/pays/PaysList"


const appRoute = [
    {
        path: '',
        element: <HomePage/>
    },
    {
        path: 'pays',
        element: <PaysPage/>,
        children: [
            {index:true,
            element: <PaysList/>}
        ]
    },
    {
        path: 'voyages',
        element: <VoyagesPage/>
    },
]


export default appRoute