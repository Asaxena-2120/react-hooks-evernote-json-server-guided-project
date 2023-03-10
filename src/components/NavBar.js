import react from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink>
                Header
            </NavLink>
            <NavLink>
                AllNotes
            </NavLink>
            <NavLink>
                Login
            </NavLink>
        </div>
    )

}
export default NavBar