import {Box, Divider, Typography} from "@mui/material"


const NemoneKarHead = () => {
    return(
        <Box pt={10}>
            <Divider variant={"fullWidth"} sx={{
                "&::before , &::after" :{
                    borderColor:"#45474a"},

            }}><Typography color={"info.main"} fontSize={"2em"}>نمونه کار ها</Typography></Divider>
        </Box>
    )
}
export default NemoneKarHead;