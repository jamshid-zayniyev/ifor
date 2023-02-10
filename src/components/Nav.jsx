import { useContext} from "react"
import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UserContext } from "../context/userContext"

const NavR = () => {
  const {state} = useContext(UserContext)
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container >
        <Link className="navbar-brand fw-bold fs-4 text-decoration-none text-dark" to="/">Crystal Shop</Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100%',overflow:"hidden" }}
            navbarScroll
          >
            <Link className="nav-link active" id="navfirst" aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
          <div className="buttons">
        <Link to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i> Login</Link>
        <Link to="/register" className="btn btn-outline-dark ms-2"><i className="fa fa-user-plus me-1 "></i> Register</Link>
        <Link to="/cart" className="btn btn-outline-dark ms-2"><i className="fa fa-shopping-cart me-1"></i> Cart ({state.length})</Link>
    </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavR