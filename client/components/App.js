import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {BrowserHistory, Redirect} from 'react-router'

import Navbar from './Navbar'
import Inbox from './Inbox'
import Sent from './Sent'
import EditProfile from './EditProfile'
import ViewProfile from './ViewProfile'
import CategoriesList from './CategoriesList'
import CategoryPage from './CategoryPage'
import CategoryPagePublic from './CategoryPagePublic'
import UserProfile from './UserProfile'
import Contact from './Contact'
import WaitingIndicator from './WaitingIndicator'
import About from './About'
import Frontpage from './Frontpage'
import Footer from './Footer'
import ErrorMessage from './ErrorMessage'
import PostFeedback from './PostFeedback'

class App extends React.Component {
  render () {
    return (
      <Router history={BrowserHistory}>
        <div className='app'>
          <Navbar />
          <ErrorMessage />
          {this.props.waiting && <WaitingIndicator />}
          {!this.props.isAuthenticated &&
            <Switch>
              <Route exact path='/' component={Frontpage} />
              <Route path='/skills/:id' component={CategoryPagePublic} />
              <Route exact path='/profiles/:id' component={ViewProfile} />
              <Route path='/about' component={About} />
            </Switch>
          }
          {this.props.isAuthenticated &&
          <Switch>
            <Route path='/messages' component={Inbox} />
            <Route path='/sent' component={Sent} />
            <Route exact path='/' render={() => (
              <FirstTimer firstLogin={this.props.firstLogin} />
            )} />
            <Route exact path='/profile' component={UserProfile} />
            <Route exact path='/profile/edit' component={EditProfile} />
            <Route exact path='/profiles/:id' component={ViewProfile} />
            <Route exact path='/skills/:id' component={CategoryPage} />
            <Route path='/categories' component={CategoriesList} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/postfeedback' component={PostFeedback} />
          </Switch>
        }
          <Footer />
        </div>
      </Router>

    )
  }
}

function FirstTimer (props) {
  if (props.firstLogin) {
    return (<Redirect to='/profile/edit' />)
  } else {
    return (<CategoriesList />)
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    firstLogin: state.auth.firstLogin,
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(App)
