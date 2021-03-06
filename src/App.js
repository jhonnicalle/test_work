// import logo from './logo.svg';
import './App.sass';
import { useEffect, useState } from 'react';
import API from './utils/API';
import { Route, Switch } from 'react-router';
import Home from './views/Home';
import User from './views/User/User';

function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   // settingData()
  // }, [])

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/users' component={User} />
    </Switch>
  );
}

export default App;
