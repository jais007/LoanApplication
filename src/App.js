
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import '@fortawesome/fontawesome-free/css/all.min.css'; 
// import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListApplicationComponent from './components/ListApplicationComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddApplicationComponent from './components/AddApplicationComponent';
import DashboardComponent from './components/DashboardComponent';
import ViewApplicationComponent from './components/ViewApplicationComponent';
import BatchSubmission from './components/BatchSubmission';
function App() {
  return (
    <div>
      <Router>
        <div>
          <HeaderComponent/>
          <div className="container">
            <Switch>
              <Route path ="/" exact component={DashboardComponent}></Route>
              <Route path ="/applications" component={ListApplicationComponent}></Route> 
              <Route path = "/add-application" component = {AddApplicationComponent}></Route>
              <Route path = "/view-application/:id" component = {ViewApplicationComponent}></Route>
              <Route path = "/batch-submission" component = {BatchSubmission}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
}

export default App;
