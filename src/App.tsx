import * as React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about'
import Illustration from './components/illustration'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

export interface AppProps {
  /**
   * Default Page that App will be constructed with.
   * If unspecified, App will be constructed with a Page of 'About'.
   */
  defaultPageToShow ?: string;
}

/** App state. */
export interface AppState {
  /** Current page that is being viewed. */
  pageToShow: string;
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
        pageToShow: this.props.defaultPageToShow || 'About',
      };
    }


  /**
   * Handles a page change in the Sidebar.
   * @param nextPage string defining the next page to show
   */
  public handleChangePage = (event: React.ChangeEvent<{value: string}>) => {
    this.setState({
      pageToShow: event.target.value,
    });
  };

  public render() {
    const { pageToShow } = this.state;

    return (
      <div className="App">
      <Router>
          <BottomNavigation
            value={pageToShow}
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
            <BottomNavigationAction label='Animation' value='Animation'/>
            <BottomNavigationAction label='Websites' value='Websites'/>
          </BottomNavigation>
          <Route exact path="/about" component={About} />
          <Route path="/illustration" component={Illustration} />
        </Router>
      </div>
    );
  }
}

export default App;
