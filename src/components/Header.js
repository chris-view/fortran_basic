import React from 'react'
import Typed from 'react-typed'
import {makeStyles} from '@material-ui/core/styles'
import {
    Typography,
    Avatar,
    Grid,
    Box
} from '@material-ui/core'
import avatar from '../images/port_DP.jpg'


//CSS STYLES

const useStyles = makeStyles(theme => ({
    avatar:{
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin : "1rem"
    },
    title : {
        color: "tomato",
    },
    subtitle :{
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer:{
        position: "absolute",
        top:"50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles()
    return (
        <Box className = {classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className = {classes.avatar} src={avatar} alt ="Samuel Chrstian"/>
            </Grid>
            <Typography className = {classes.title} variant ="h4">
                <Typed strings = {["Samuel Christian"]} typeSpeed={10} />
            </Typography>
            <br/>
            <Typography className = {classes.subtitle} variant ="h5">
                <Typed 
                strings = {["Software Engineer", "Web Developer", "QA Engineer"]} 
                typeSpeed={40} 
                backSpeed = {60}
                loop
                />
            </Typography>
        </Box>
    )
}

export default Header
