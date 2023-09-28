import React from "react";

// Routes
import Routes from "./routes";


// Styles
import styleBase from "./styles";
import "./assets/css/styles.css";

// import './assets/css/theme.css';
        

import {
  createTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/query";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    
//core
import "primereact/resources/primereact.min.css";                                       
        


const theme = createTheme({
  palette: {
    primary: {
      main: styleBase.colors.colorsBaseProductNormal
    },
    secondary: {
      main: styleBase.colors.colorsBaseProductNormalHover
    }
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
