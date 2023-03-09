import HomePage from "../pages/home/Home"
import PaysPage from "../pages/pays/PaysPage"
import VoyagesPage from "../pages/voyages/VoyagesPage"
import PaysList from "../pages/pays/PaysList"
import MyTravel from "../pages/myTravel/MyTravel"
import Admin from "../pages/admin/Admin"
import PaysDetail from "../pages/pays/PaysDetail"

const appRoute = [
    {
        path: '',
        element: <HomePage/>
    },
    {
        path: 'pays',
        element: <PaysPage/>,
        children: [
            {   index:true,
                element: <PaysList/>},
            {
                path:':paysId',
                element:<PaysDetail/>,
            }
        ]
    },
    {
        path: 'voyages',
        element: <VoyagesPage/>
    },
    {
        path: 'myTravel',
        element: <MyTravel/>
    },
    {
        path: 'admin',
        element: <Admin/>
    }
]


export default appRoute