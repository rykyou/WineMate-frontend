import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './containers/App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ffdcbd',
      main: '#f0aa8d',
      dark: '#bb7b5f',
      contrastText: '#000'
    },
    secondary: {
      light: '#503073',
      main: '#240747',
      dark: '#050021',
      contrastText: '#fff'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

ReactDOM.render(
  <Router>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
