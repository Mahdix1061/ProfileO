import {Box, Divider, Typography} from "@mui/material"


const ErtebatBaManHead = () => {
    return(
        <Box pb={20} bgcolor={"secondary.main"} id="Ertebat">
            <Divider variant={"fullWidth"} sx={{
                "&::before , &::after" :{
                    borderColor:"#45474a"},

            }}><Typography color={"info.main"} fontSize={"2em"}>ارتباط با من</Typography></Divider>
        </Box>
    )
}
export default ErtebatBaManHead;