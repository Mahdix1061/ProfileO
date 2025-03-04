import {Box, Button} from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Unstable_Grid2";



const ErtebatBaManTxtField = () => {
    return(
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            bgcolor="secondary.main"
            width="100%"
            pb={10}
        >
        <Box
            component="form"
            noValidate
            autoComplete="off"
            display={"flex"}
            flexDirection="column"
            justifyContent="center"
            width="90%"
        >
            <div
                style={{width:'100%',display:'flex', justifyContent:'center'}}>
                <Grid container textAlign={"center"} width={"100%"} spacing={4} >
                    <Grid xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            required
                            variant={"standard"}
                            placeholder={"نام و نام خانوادگی"}
                            // sx={{width:"20%"}}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={4} lg={4} >
                        <TextField
                            // sx={{mx:{xs:"1rem",md:"3rem",lg:"6rem"}}}
                            required
                            variant={"standard"}
                            type={"email"}
                            placeholder={"ایمیل"}
                        />
                    </Grid>
                    <Grid xs={12} sm={12} md={4} lg={4}>
                        <TextField
                            required
                            variant={"standard"}
                            placeholder={"شماره تماس"}
                            // sx={{width:"20%"}}
                        />
                    </Grid>



                </Grid>
            </div>
            <div style={{width:'100%',display:'flex', justifyContent:'center',paddingBottom:"2rem",paddingTop:"4rem"}}>
                    <TextField
                    multiline
                    placeholder={"متن پیام"}
                    variant={"outlined"}
                    rows={8}
                    maxRows={8}
                    sx={{width:"60%"}}
                    />
            </div>
            <div style={{width:'100%',display:'flex', justifyContent:'center'}}>

                <Button variant={"contained"} sx={{width:"6rem"}}>ارسال پیام</Button>

            </div>
        </Box>
        </Box>
    )
}
export default ErtebatBaManTxtField;