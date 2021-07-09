
import { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { history } from 'react'
import ScrollToTop from './hooks/ScrollToTop'
import Features from './pages/Features'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Stories from './pages/Stories'

function App() {
  return (
    <Fragment>
      <ScrollToTop history={history} />
      <Switch>
      <Route path="/features"><Features /></Route>
      <Route path="/pricing"><Pricing /></Route>
      <Route path="/stories"><Stories /></Route>
      <Route path="/"><Home /></Route>
    </Switch>
    </Fragment> 
  )
}

export default App
