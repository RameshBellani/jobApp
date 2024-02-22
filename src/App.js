import {Route, Switch, Redirect} from 'react-router-dom'
import LoginForm from './LoginForm'
import Home from './Home'
import NotFound from './NotFound'
import ProtectedRoute from './ProtectedRoute'
import AboutJobItem from './AboutJobItem'
import AllJobs from './AllJobs'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={AllJobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJobItem} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App
