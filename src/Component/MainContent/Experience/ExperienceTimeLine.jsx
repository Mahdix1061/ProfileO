import {TimelineDot,Timeline,TimelineItem,TimelineConnector,TimelineSeparator,TimelineContent} from "@mui/lab";
import {Box, Typography} from "@mui/material";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"


const ExperienceTimeLine = () => {

    useEffect(()=> {
        Aos.init({duration: 600});
    },[])

    return(
        <Box width={"100%"} sx={{display:"flex",justifyContent:"start"}} pt={10} pb={40}>
            <Timeline position="right" data-aos={"fade-down"}  >
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{width:{xs:"1rem",md:"1.2rem",lg:"1.4rem"},height:{xs:"1rem",md:"1.2rem",lg:"1.4rem"}}} color="primary" />
                        <TimelineConnector sx={{height:"10rem"}} color="#3f4144" />
                    </TimelineSeparator>
                    <TimelineContent color={"#fff"}>
                        <Typography  fontSize={{xs:"0.5em",md:"1.1em",lg:"1.7em"}} sx={{textShadow:"20px 20px 40px #fff"}}>مهر 1402</Typography>
                        <Typography  pt={4} fontSize={{xs:"0.8em",md:"1.4em",lg:"2em"}}  color={"#fff"}>دانشگاه سراسری نازلو ارومیه</Typography>
                        <Typography fontSize={{xs:"0.6em",md:"1.2em",lg:"1.8em"}} color={"primary.main"}>کارشناسی مهندسی کامپیوتر</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot sx={{width:{xs:"1rem",md:"1.2rem",lg:"1.4rem"},height:{xs:"1rem",md:"1.2rem",lg:"1.4rem"}}} color="primary" />
                    </TimelineSeparator>
                    <TimelineContent color={"#fff"}>
                        <Typography  fontSize={{xs:"0.5em",md:"1.1em",lg:"1.7em"}} sx={{textShadow:"20px 20px 40px #fff"}}>مهر 1402</Typography>
                        <Typography pt={4} fontSize={{xs:"0.8em",md:"1.4em",lg:"2em"}} color={"#fff"}>دانشگاه سراسری نازلو ارومیه</Typography>
                        <Typography fontSize={{xs:"0.6em",md:"1.2em",lg:"1.8em"}} color={"primary.main"}>کارشناسی مهندسی کامپیوتر</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    )
}
export default ExperienceTimeLine;