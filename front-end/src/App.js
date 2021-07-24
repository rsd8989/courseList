import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import TopBar from './components/TopBar/TopBar';
import './App.css';
import PaymentCard from './components/PaymentCard/PaymentCard';
import Home from './components/Home/Home';
import BoughtCourses from './components/BoughtCourses/BoughtCourses';

function App() {
 
  
  return (
    <Router>
      <div className="App">
        <TopBar/>
        {/* {allusers.map(element=>{
          return (
                <div>
                    <Link to={`/chat/${element.user_id}`}>{element.username}</Link>
                </div>
          )
        })} */}
        {/* <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <button onClick={()=>setUser()}>set username</button> */}
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/boughtCourses" component={BoughtCourses}/>
          <Route path="/payment/:id" component={PaymentCard}/>
          <Route path="/chat/:id" component={ChatWindow}/>
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
