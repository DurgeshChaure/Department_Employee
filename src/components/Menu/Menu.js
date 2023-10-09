import { Link } from "react-router-dom";
import { ListGroup } from "reactstrap";
function Menu ()
{
  return(
    <div >
    <ListGroup >
    <Link className="list-group-item list-group-item-action" tag="a" to="/" action>
       Home
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/department" action>
        Department
      </Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/employee" action>
        Employee
      </Link>
    </ListGroup>
  </div>
  )
}

export default Menu;