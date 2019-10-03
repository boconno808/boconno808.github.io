import * as React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about'
import Illustration from './components/illustration'
import Websites from './components/websites'
import Animation from './components/animation'
import Introduction from './components/introduction'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export interface AppProps {
  /**
   * Default Page that App will be constructed with.
   * If unspecified, App will be constructed with a Page of 'About'.
   */
  //defaultPageToShow ?: string;
}

/** App state. */
export interface AppState {
  /** Current page that is being viewed. */
  value: string;
}

  /**
   * Unstyled component that renders a list of Zone checkboxes with a subset
   * dropdown selection and a Select All tri-state checkbox.
   */
  export class App extends React.Component<
    AppProps,
    AppState
  > {
    constructor(props: AppProps) {
      super(props);
      this.state = {
        value: 'About',
      };
    }


  /**
   * Handles a page change in the Sidebar.
   * @param nextPage string defining the next page to show
   */
   handleChangePage = (event: any, value: string) => {
     this.setState({ value });
   };

  public render() {
    const { value } = this.state;

    return (
      <div className="App">
      <Router>
          <BottomNavigation
            value={value}
            onChange={this.handleChangePage}
            showLabels
          >
            <BottomNavigationAction
              component={Link}
              to="/about"
              label='About'
              value='About'
              />
            <BottomNavigationAction
              component={Link}
              to="/illustration"
              label='Illustration'
              value='Illustration'
              />
            <BottomNavigationAction
              component={Link}
              to="/animation"
              label='Animation'
              value='Animation'/>
            <BottomNavigationAction
              component={Link}
              to='/websites'
              label='Websites'
              value='Websites'/>
          </BottomNavigation>
          <Route exact path="/" component={Introduction} />
          <Route path="/about" component={About} />
          <Route path="/illustration" component={Illustration} />
          <Route path="/websites" component={Websites} />
          <Route path="/animation" component={Animation} />
        </Router>
      </div>
    );
  }
}

export default App;
