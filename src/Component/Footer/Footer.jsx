import {Box} from "@mui/material";
import {PhoneRounded,GitHub,Telegram,Instagram,WhatsApp} from "@mui/icons-material";

const Footer = () => {
    return(
        <Box pt={5} className={"mos"} bgcolor="secondary.main" display="flex" justifyContent="center" pb={5} borderTop={"1px solid #4d4f51"}>
            <a href={"https://github.com/Mahdix1061"} target={"_blank"} style={{marginRight:"1rem"}}><GitHub color={"info"}/></a>
            <a href={"tg://resolve?domain=Mahdix1061"} target={"_blank"} style={{marginRight:"1rem"}}><Telegram color={"info"}/></a>
            <a href={"https://www.instagram.com/_itsmeiti/"} target={"_blank"} style={{marginRight:"1rem"}}><Instagram color={"info"}/></a>
            <a href={"https://api.whatsapp.com/send?phone=989914825771"} target={"_blank"} style={{marginRight:"1rem"}}><WhatsApp color={"info"}/></a>
        </Box>
    )
}
export default Footer;