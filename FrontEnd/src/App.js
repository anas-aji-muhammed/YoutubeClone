import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Themes";
import {RouterProvider} from "react-router-dom";
import {routes} from "./utils/routes";



function App() {
  return (
    <ThemeProvider theme={darkTheme}>
        <RouterProvider router={routes} />
    </ThemeProvider>
  );
}

export default App;
