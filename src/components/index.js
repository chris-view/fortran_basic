import React from 'react'
import NavBar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js'
import {makeStyles} from '@material-ui/styles'
import {Box} from '@material-ui/core'


const useStyles = makeStyles(theme=>({
    particlesCanva:{
        position: "absolute",
        opacity:"0.5"
    }
}))

const Home = () => {
    const classes = useStyles()
    return (
    
            <Box component="div">
                <NavBar/>
                <Header/>
                <Particles
                canvasClassName={classes.particlesCanva}
                params ={{
                    particles:{
                        number:{
                            value:20,
                            density:{
                                enable:true,
                                value_area: 900,
                            }
                        },
                        shape:{
                            type: "star",
                            stroke:{
                                width:1,
                                color:"tomato"
                            }
                        },
                        size:{
                            value:5,
                            random:true,
                            anim:{
                                enable:true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity:{
                            value:1,
                            random:true,
                            anim:{
                                enable:true,
                                speed:1,
                                opacity_min:0.1,
                                sync: true
                            }
                        }
                    }
                }}
                />
           </Box>
    )
}

export default Home
