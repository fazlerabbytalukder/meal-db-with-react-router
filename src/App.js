import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ButtonGroup, Button, Navbar, Container, Nav, NavDropdown, Form, FormControl } from "react-bootstrap";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import MealDetails from "./components/MealDetails/MealDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#">Meal DB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link" to='/home'>Home</Link>
              <Link className="nav-link" to='/meals'>Meals</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        

        
        <Route path='/'>
            <Meals></Meals>
          </Route>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/meals'>
            <Meals></Meals>
          </Route>
          <Route path='/meal/:mealId'>
            <MealDetails></MealDetails>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
