import {Box, Typography} from "@mui/material";
import {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";


const AboutMeText = () => {
    useEffect(()=>{
        Aos.init({duration:1000,easing:'linear'});
    },[])
    return(
        <Box display={"flex"} data-aos="fade-down" justifyContent="center" alignItems="center" width={"100%"} mt={25} sx={{paddingBottom:{xs:"0rem",lg:"8rem"}}} >
            <Box  width={"75%"} margin={"0 auto"} alignItems={"center"} justifyContent={"center"}>
                <Typography variant={"h5"} mb={3} color={"#fff"}>درباره ی من</Typography>
                <Typography color={"#909090"} lineHeight={2}>
                    سلام! من مهدی نریمانی هستم، یک توسعه‌دهنده فرانت‌اند با علاقه‌ای شدید به خلق تجربه‌های کاربری بی‌نظیر و رابط‌های کاربری جذاب و کاربردی.

                    با داشتن چندین سال تجربه در زمینه توسعه وب، مهارت‌های من در HTML، CSS، JavaScript و کتابخانه‌ها و فریم‌ورک‌های مرتبط مانند React  به من این امکان را می‌دهد تا پروژه‌هایی با کیفیت بالا و قابل توسعه ایجاد کنم. هدف من همواره این است که با استفاده از بهترین روش‌ها و استانداردهای روز، وب‌سایت‌هایی کاربرپسند و زیبا بسازم.

                    من به یادگیری مداوم و به‌روزرسانی دانش خود اهمیت زیادی می‌دهم و همیشه به دنبال کشف تکنولوژی‌های جدید و بهبود مهارت‌های خود هستم. وقتی که مشغول کدنویسی نیستم، از گذراندن وقت با خانواده و دوستانم، مطالعه کتاب‌های فنی و غیر فنی، و مشارکت در جامعه توسعه‌دهندگان لذت می‌برم.

                    اگر به دنبال همکاری یا مشاوره در زمینه توسعه فرانت‌اند هستید، خوشحال می‌شوم که با شما در ارتباط باشم. لطفاً از طریق فرم تماس در سایت با من تماس بگیرید.
                </Typography>
            </Box>
        </Box>
    )
}
export default AboutMeText;