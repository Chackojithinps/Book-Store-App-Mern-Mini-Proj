import {React} from 'react'
import {AppBar, Toolbar, Typography} from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
const Header =() =>{
   return (
    <div>
       <AppBar position='sticky'>
         <Toolbar>
           <Typography>
              <MenuBookIcon/>
           </Typography>
           </Toolbar>
       </AppBar>
    </div>
   )
}
export default Header