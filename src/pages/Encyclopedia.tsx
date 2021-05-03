import { Route } from "react-router";
import { Link } from "react-router-dom";
import Classes from "./encyclopedia/Classes";
import Roles from "./encyclopedia/Roles";

function Encyclopedia() {
  return (
    <div>
      <h1>Encyclopedia</h1>

      <h2>
        Table of Contents
      </h2>

      <ul>
        <li>
          <Link to='/encyclopedia/roles'>Roles</Link>
        </li>
        <li>
          <Link to='/encyclopedia/classes'>Classes</Link>
        </li>
      </ul>

      <Route path='/encyclopedia/roles' >
        <Roles />
      </Route>

      <Route path='/encyclopedia/classes' >
        <Classes />
      </Route>
    </div>
  );
}

export default Encyclopedia;