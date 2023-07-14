import {React} from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Header =() =>{
   return (
    <div>
       <AppBar position='sticky'>
         <Toolbar>
           <Typography>
              <LibraryBooksIcon/>
           </Typography>

              <Tabs textColor='inherit' indicatorColor='secondary' value={0}>
                 <Tab label="Add product" />
                 <Tab label ="About us" />
              </Tabs>
           </Toolbar>
       </AppBar>
    </div>
   )
}
export default Header