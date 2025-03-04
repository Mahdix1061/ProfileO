import HomeTypeComponent from "./Home.TypeComponent";
import {Box} from "@mui/material";
import HomePageInfo from "./HomePageInfo";


const HomePage = () => {
    return(
        <Box  display={"flex"} flexDirection={"column"} alignItems={"start"} justifyContent={"center"} width={"100%"}
             height={"100vh"} sx={{background: "linear-gradient(10deg,#111214, #040301)"}}>
                <HomeTypeComponent/>
                <HomePageInfo/>
        </Box>
)
}
export default HomePage;