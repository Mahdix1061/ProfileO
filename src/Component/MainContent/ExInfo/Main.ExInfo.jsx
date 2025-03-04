import {Box, Typography} from "@mui/material";
import ExImg from "../../../Assets/pexels-photo-1846049.jpeg"

const MainExInfo =()=>{
    return(

        <div style={{position:"relative",overflow:"hidden",width:"100vw",height:"60rem"}}>
            <img src={ExImg} style={{width:'100vw',height:'60rem',position:'fixed',zIndex:'-1',left:"0",top:"0"}} alt="ExInfo"/>
            <Box  zIndex={22} textAlign="center" width={'100%'} height={'20rem'} display="flex" justifyContent="center" alignItems="center"
            border={"4px solid white"}
                  boxShadow={"200px 200px 100px #fff"}
            >
                 <Box>
                      <Typography color={"#fff"} fontSize={{xs:"1em",md:"2em",lg:"3em"}} >32</Typography>
                      <Typography  color={"primary.main"} fontSize={{xs:"0.8em",md:"2em",lg:"3em"}} variant="h5">پروژه ی تکمیل شده</Typography>
                 </Box>
                 <Box mx={{xs:"2rem",md:"4rem",lg:"6rem"}}>
                      <Typography color={"#fff"} fontSize={{xs:"1em",md:"2em",lg:"3em"}}  variant="h4">24</Typography>
                      <Typography  fontSize={{xs:"0.8em",md:"2em",lg:"3em"}} color={"primary.main"}  variant="h5">مشتری راضی</Typography>
                 </Box>
                 <Box>
                      <Typography fontSize={{xs:"1em",md:"2em",lg:"3em"}} color={"#fff"}  variant="h4">9000</Typography>
                      <Typography fontSize={{xs:"0.8em",md:"2em",lg:"3em"}}  color={"primary.main"}  variant="h5">ساعات کار</Typography>
                 </Box>
            </Box>
            <Box width={'100%'} height={'100%'} bgcolor={"#171a1d"} >

            </Box>
        </div>

    )
}
export default MainExInfo;