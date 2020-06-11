import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Typography, Box} from '@material-ui/core'
import Navbar from './Navbar'

// CSS STYLES
const useStyles = makeStyles(theme => ({
    mainContainer:{
        background:"#233"
    },
    timeLine:{
        position:"relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before":{
            content: "''",
            position:"absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after":{
            content:"''",
            display: "table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
    },
    timeLineYearItem:{
        padding:"1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after":{
            content : "''",
            position: "absolute"
        },
        "&:before":{
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderColor: "tomato tomato transparent transparent",
            borderStyle: "solid",
            borderWidth: "0.625rem",
            transform: "rotate(225deg)"
        },
        [theme.breakpoints.up("md")]:{
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float: "right",
                margin: "1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left: "-0.625rem",
                borderColor: "transparent transparent tomato tomato"
            }
        }
    },
    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize: "1.8rem",
        background: "tomato",
        color: "white",
        lineHeight: 1,
        padding: "0.5rem 0 1rem",
        "&before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)":{
                float:"none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display: "none"
            }
            
        }
    },
    heading:{
        color:"tomato",
        padding:"3rem 0",
        textTransform: "uppercase"
    },
    subHeading:{
        color:"white",
        padding: "0",
        textTransform: "uppercase"
    }
}))

const Resume = () => {
    const classes = useStyles()
    return (
        <>  
            <Navbar/>
            <Box component="header" className={classes.mainContainer}>
                <Typography variant ="h4" align="center" className={classes.heading}>
                     experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    {/* start 1 */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineYearItem}`}>
                        2016
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            fortran
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato", textTransform:"capitalize"}}>
                            undergraduate - uniport
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            I was introduced to programming with the FORTRAN programming language as a 200L student.
                        </Typography>
                    </Box>
                    {/* end of start 1 */}
                    {/* start 2 */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineYearItem}`}>
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            C++ | Java
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato", textTransform:"capitalize"}}>
                            undergraduate - uniport
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Got introduced to the OOP programming paradigm as a 300L student
                        </Typography>
                    </Box>
                    {/* end of start 2 */}
                    {/* start 3 */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineYearItem}`}>
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            JavaEE, JSF, MySql Stack
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato", textTransform:"capitalize"}}>
                            Majtamtech Services
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Assisted with Java related projects at Majtamtech during my Student Industrial Training program.
                        </Typography>
                    </Box>
                    {/* end of start 3 */}
                    {/* start 4 */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineYearItem}`}>
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            CSS, Html & Javascript
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato", textTransform:"capitalize"}}>
                            SmartTech Global
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Took a course here...
                        </Typography>
                    </Box>
                    {/* end of start 4 */}
                    {/* start 5 */}
                    <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineYearItem}`}>
                        2019-Now
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography variant="h5" align="left" className={classes.subHeading}>
                            mern stack
                        </Typography>
                        <Typography variant="body1" align="center" style={{color:"tomato", textTransform:"capitalize"}}>
                            SmartTech Global
                        </Typography>
                        <Typography variant="subtitle1" align="center" style={{color:"tan"}}>
                            Currently work as a junior MERN Stack developer and tutor.
                        </Typography>
                    </Box>
                    {/* end of start 5 */}
                </Box>
            </Box>
        
        </>
    )
}

export default Resume