import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./routes/Home'));
const DayDetails = lazy(() => import('./routes/DayDetails'));

const App = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/:dayName" component={DayDetails}/>
      </Switch>
    </Suspense>
  </Router>
);
export default App;
