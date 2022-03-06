import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles'
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import avatar from '../images/port_DP.jpg'
import {Link} from 'react-router-dom'
import SideFooter from './SideFooter'
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core'
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail,
    ArrowForwardIosOutlined

} from '@material-ui/icons'

//css styles
const useStyles =  makeStyles(theme => ({
    menuSliderContainer : {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar : {
        display: "block",
        margin: "1rem auto",
        width: theme.spacing(11),
        height: theme.spacing(11),
    
    },
    listItem : {
        color:"tan"
    }
}));

const menu = [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: "/"

    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps/>,
        listText: "Projects",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })
    const toggleSlider = (slider, open) => () =>{
        setState({...state, [slider]: open})
    }
    const classes = useStyles();
    const sideList = slider => (
        <Box component="div" 
        className = {classes.menuSliderContainer} 
        onClick = {toggleSlider("right",false)}
        >
            <Avatar className = {classes.avatar} src={avatar} alt ="Samuel Christian"/>
            <Divider/> 
            <List>
                {menu.map((item,key)=>(
                   <ListItem button key={key} component ={Link} to={item.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {item.listIcon}
                        </ListItemIcon>
                        <ListItemText primary = {item.listText} className={classes.listItem}/>
                   </ListItem>
                )
                    
                )}
                
            </List>
        </Box>
        
    )
    return (
        <>
        <Box component = "nav">
            <AppBar position ="static" style={{background:"#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowForwardIosOutlined style={{color:"tomato"}}/>
                        <Typography variant ="h5" style={{color:"tan"}}>
                       See Portfolio
                    </Typography>
                    
                    </IconButton>
                    <MobilRightMenuSlider open={state.right} anchor ="left" onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                        <SideFooter/>
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Navbar
