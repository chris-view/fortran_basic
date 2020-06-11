import React from 'react'
import {makeStyles, BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import { Twitter, Facebook, GitHub} from '@material-ui/icons'

const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 150
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            "&:hover":{
                fill:"tomato",
                fontSize:"1.8rem"
            }
        }
    }
})
const SideFooter = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background:"#233"}}>
            <BottomNavigationAction 
                className={classes.root} 
                style={{paddind:"0" }} 
                icon = {<Facebook/>}
                target="_blank" 
                href="http://www.facebook.com/deminister.94/"
            />
            <BottomNavigationAction 
                className={classes.root} 
                style={{paddind:"0" }} 
                icon = {<GitHub/>}
                target="_blank" 
                href="http://www.github.com/chris-view/"
            />
            <BottomNavigationAction 
                className={classes.root} 
                style={{paddind:"0" }} 
                icon = {<Twitter/>}
                
            />
        </BottomNavigation>
    )
}

export default SideFooter
