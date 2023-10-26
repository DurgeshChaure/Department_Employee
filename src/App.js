import './App.css';
import DepartmentList from './components/DepartmentList/DepartmentList';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import { Container, Row, Col } from 'reactstrap';
import Menu from './components/Menu/Menu';
import Employee from './components/EmployeeList/Employee'
import Contact from './components/Contact/Contact';
import About from './components/About/About';
function App() {
  return (
    <div>
    <Router>
        <Row>
          <Col md={2}>
           <Menu/>
          </Col>
          <Col md={10}>
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/department" Component={DepartmentList} />
              <Route path="/employee" Component={Employee}></Route>
              <Route path="/about" Component={About}></Route>
              <Route path="/contact" Component={Contact}></Route>
            </Routes>
          </Col>
        </Row>
    </Router>
  </div>
  );
}

export default App;
