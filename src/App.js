import "./App.css";

import { CssBaseline, Grid, StyledEngineProvider } from "@mui/material";
import Detail from "./components/Details/Detail";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <CssBaseline />
      <StyledEngineProvider>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh", padding: "0px 100px" }}
        >
          <Grid item xs={3.5}>
            <Detail title="Income" />
          </Grid>
          <Grid item xs={5}>
            <Main />
          </Grid>
          <Grid item xs={3.5}>
            <Detail title="Expense" />
          </Grid>
        </Grid>
      </StyledEngineProvider>
    </div>
  );
}

export default App;
