import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Purchase from './Purchase'
import PurchaseModal from './PurchaseModal'
import SignIn from './SignIn'
import SelectProgram from './SelectProgram'
import Program from './Program'
import Employer from './Employer'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/purchase' component={Purchase}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/purchasemodal' component={PurchaseModal}/>
      <Route path='/selectprogram' component={SelectProgram}/>
      <Route path='/program' component={Program}/>
      <Route path='/employer' component={Employer}/>
    </Switch>
  </main>
)

export default Main
