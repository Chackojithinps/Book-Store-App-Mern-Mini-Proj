import { React, useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import {NavLink} from 'react-router-dom'
const Header = () => {
  const [state, setState] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography>
            <LibraryBooksIcon />
          </Typography>

          <Tabs
            textColor="inherit"
            indicatorColor="secondary"
            value={state}
            sx={{ml:"auto"}}
            onChange={(e, val) => setState(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="about" label="About us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
