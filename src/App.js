// import logo from './logo.svg';
import './App.sass';
import { useEffect, useState } from 'react';
import API from './utils/API';
import { Route, Switch } from 'react-router';
import Home from './views/Home';
import User from './views/User/User';
import InfoUser from './views/User/InfoUser';

function App() {

  const [data, setData] = useState([])

  // useEffect(() => {
  //   // settingData()
  // }, [])

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/users' component={User} />
      <Route exact path='/users/:id' component={InfoUser} />
    </Switch>
  );
}

export default App;
