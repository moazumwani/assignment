import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (

        <div className="navbar">
            <ul>

                <li>

                    <NavLink exact activeClassName="active_class" to="/">
                        Home
              </NavLink>

                </li>
                <li>

                    <NavLink exact activeClassName="active_class" to="/Details">
                        Details
            </NavLink>
                </li>
            </ul>
            <br />
        </div>

    );
};

export default Nav;
