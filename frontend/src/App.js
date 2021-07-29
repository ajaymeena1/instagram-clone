import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter,Route,Switch } from "react-router-dom"
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import Home from './components/screens/Home';
import UploadPost from './components/screens/UploadPost';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/upload" component={UploadPost} />

        </Switch> 
    </BrowserRouter>
    </div>
  );
}

export default App;
