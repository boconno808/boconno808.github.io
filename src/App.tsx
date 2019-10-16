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

//TODO: Fix the props
const theme = createMuiTheme({
    palette: {
     primary: { main: orange[700] },
  },
});

export interface AppProps {
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
                  to='/contact'
                  label='Contact'
                  value='Contact'/>
              </BottomNavigation>
              <Route exact path="/" component={Introduction} />
              <Route path="/about" component={About} />
              <Route path="/illustration" component={Illustration} />
              <Route path="/contact" component={Contact} />
              <Route path="/animation" component={Animation} />
            </ThemeProvider>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
