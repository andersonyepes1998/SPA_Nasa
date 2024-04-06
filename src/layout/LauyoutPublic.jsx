
import { Outlet } from "react-router-dom";
import NavBars from "../components/NavBars";
import Foothers from "../components/Foothers";

const LauyoutPublic = () => {

    return(
        <div>
            <NavBars/>
                <Outlet/>
            <Foothers/>
        </div>
    )
}

export default LauyoutPublic