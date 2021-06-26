import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home.js';
import Http from './pages/api/Http.js';
import Json from './pages/api/Json.js';
import Firebase from './pages/api/Firebase.js';

import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
            <Redirect to='/home' />
        </Route>
        <Route path='/home' exact>
            <Home />
        </Route>
        <Route path='/api-http' exact>
            <Http />
        </Route>
        <Route path='/api-json' exact>
          <Json />
        </Route>
        <Route path='/api-firebase' exact>
          <Firebase />
        </Route>
        <Route path='/api-firebase/:quoteId'>
          <QuoteDetail />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
