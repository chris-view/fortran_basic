import React from 'react'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles'
import project1 from '../images/header.JPG'
import project3 from '../images/project3.jpg'
import {
    Box, Typography, Grid,
    Card, CardActionArea, 
    CardActions, CardContent,
    CardMedia, Button
} from '@material-ui/core'

const CSS = makeStyles(theme=>({
    mainContainer:{
        background: "#233",
        height:"100%",
        padding:"2rem"
    },
    cardContainer:{
        maxWidth: 345,
        margin: "3rem auto",
        
    }
}))

const portfolio = () => {
    const classes = CSS()
    return (
        <>

            <Navbar/>
            <Box component="div" className={classes.mainContainer}>
                
                <Grid container justify="center" >
                    {/* project 2 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="project" height="140" image={project1}/>
                                <CardContent>
                                   <Typography gutterBottom variant="h5">
                                        Viewlodges
                                   </Typography> 
                                   <Typography variant="body2" color="textSecondary" component="p">
                                        A site that allows students to easily search and acquire off-campus lodges across Nigerian Institutions. 
                                   </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" target="_blank" href="http://www.facebook.com/viewlodges/">Share</Button>
                                <Button size="small" target="_blank" href="https://viewlodges.netlify.app/">Live Demo</Button>
                            </CardActions>
                
                        </Card>
                    </Grid>
                    
                    {/* END of project 2 */}
                    {/* project 3 */}
                    <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="project" height="140" image={project3}/>
                                <CardContent>
                                   <Typography gutterBottom variant="h5">
                                        Contributions
                                   </Typography> 
                                   <Typography variant="body2" color="textSecondary" component="p">
                                        Assited MERN Stack projects
                                   </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Live Demo</Button>
                            </CardActions>
                
                        </Card>
                    </Grid>
                    
                    {/* END of project 3 */}
                </Grid>
                <br/><br/> <br/><br/>
            </Box>
           
        </>
    )
}

export default portfolio
