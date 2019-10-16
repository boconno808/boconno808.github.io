import * as React from 'react';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about'
import Illustration from './components/illustration'
import Contact from './components/contact'
import Animation from './components/animation'
import Introduction from './components/introduction'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
     primary: { main: orange[700] },
  },
});

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
    {},
    AppState
  > {
    constructor(props: {}) {
      super(props);
      this.state = {
        value: '',
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
        <div className="container">
          <Router>
          <ThemeProvider theme={theme}>
              <BottomNavigation
                value={value}
                onChange={this.handleChangePage}
                showLabels
                color="primary"
                className = "bottomNav"
              >
                <BottomNavigationAction
                  component={Link}
                  to="/portfolio/about"
                  label='About'
                  value='About'
                  />
                <BottomNavigationAction
                  component={Link}
                  to="/portfolio/illustration"
                  label='Illustration'
                  value='Illustration'
                  />
                <BottomNavigationAction
                  component={Link}
                  to="/portfolio/animation"
                  label='Animation'
                  value='Animation'/>
                <BottomNavigationAction
                  component={Link}
                  to='/portfolio/contact'
                  label='Contact'
                  value='Contact'/>
              </BottomNavigation>
              <Route exact path="/portfolio" component={Introduction} />
              <Route path="/portfolio/about" component={About} />
              <Route path="/portfolio/illustration" component={Illustration} />
              <Route path="/portfolio/contact" component={Contact} />
              <Route path="/portfolio/animation" component={Animation} />
            </ThemeProvider>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
