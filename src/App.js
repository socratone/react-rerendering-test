import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import Main from './components/Main';
import Home from './components/Home';
import About from './components/About';

const queryClient = new QueryClient();

function App() {
  console.log('App 컴포넌트 호출');

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <Nav>
            <NavItem path="/">Home</NavItem>
            <NavItem path="/about">About</NavItem>
          </Nav>
          <Main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Main>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
