import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Layout from './Layout'
import Home from '../pages/Home'
import BadgeNew from '../pages/BadgeNew'
import BadgeDetails from '../pages/BadgeDetailsContainer'
import Badges from '../pages/Badges'
import BadgeEdit from '../pages/BadgeEdit'
import NotFound from '../pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/badges`} component={Badges} />
          <Route exact path={`${process.env.PUBLIC_URL}/badges/new`} component={BadgeNew} />
          <Route exact path={`${process.env.PUBLIC_URL}/badges/:badgeId`} component={BadgeDetails} />
          <Route exact path={`${process.env.PUBLIC_URL}/badges/:badgeId/edit`} component={BadgeEdit} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App