import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from "@mui/material";


const NemoneKarCard = () => {
    return(
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="280"
                        image={require("../../../Assets/realistic-office-moments-illustration-concepts-vector.jpg")}
                        alt="نمونه کار اول"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Ex-1
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio doloribus est impedit minus nam nulla qui quis ratione sequi?
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="large" color="primary">
                        Open
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}
export default NemoneKarCard;