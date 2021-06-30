import './reset.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Features from './pages/Features'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Stories from './pages/Stories'

function App() {
  return (
    <Switch>
      <Route path="/features"><Features /></Route>
      <Route path="/pricing"><Pricing /></Route>
      <Route path="/stories"><Stories /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
  );
}

export default App;
