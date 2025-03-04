import {Box, Divider, Typography} from "@mui/material"


const ExperienceKarHead = () => {
    return(
        <Box pt={10}>
            <Divider variant={"fullWidth"} sx={{
                "&::before , &::after" :{
                    borderColor:"#45474a"},

            }}><Typography color={"info.main"} fontSize={"2em"}>تجربه های من</Typography></Divider>
        </Box>
    )
}
export default ExperienceKarHead;