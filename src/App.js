import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import store from './redux/store';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Main from './components/Main';
import Home from './components/Home';
import Query from './components/Query';
import Redux from './components/Redux';
import Memo from './components/Memo';
import AsyncMutate from './components/AsyncMutate';
import Refetch from './components/Refetch';

const queryClient = new QueryClient();

function App() {
  console.log('App 컴포넌트 호출');

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <Nav>
              <NavItem path="/">Home</NavItem>
              <NavItem path="/query">Query</NavItem>
              <NavItem path="/redux">Redux</NavItem>
              <NavItem path="/memo">Memo</NavItem>
              <NavItem path="/async">Async</NavItem>
              <NavItem path="/refetch">Refetch</NavItem>
            </Nav>
            <Main>
              <Switch>
                <Route path="/query">
                  <Query />
                </Route>
                <Route path="/redux">
                  <Redux />
                </Route>
                <Route path="/memo">
                  <Memo />
                </Route>
                <Route path="/async">
                  <AsyncMutate />
                </Route>
                <Route path="/refetch">
                  <Refetch />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Main>
          </div>
        </Router>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
