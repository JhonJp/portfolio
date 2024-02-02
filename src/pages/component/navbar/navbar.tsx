import { Navigations } from "@/constants/Nav"
import { useRouter } from "next/router"
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap"

const NavBar = (props?: any) => {
    const router = useRouter()

    return(
        <Navbar expand="lg" {...props}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav>
                        { (Navigations || []).map((item) => {
                            return(
                                <Nav.Link href={`${item.url}`} className={`${router.pathname == item.url ? "active" : ""}`}>{item.name}</Nav.Link>
                            )
                        })}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar