import {Box} from "@mui/material";
import HomeBg from '../assets/home-bg.svg'
import {Link} from "react-router-dom";

const Home = () =>  {

    return (
        <>
            <Box
                sx={{
                    height: "90vh",
                    backgroundImage: `url(${HomeBg})`,
                    backgroundPositionX: "center",
                    backgroundPositionY: "35%",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "scroll",
                    backgroundSize: "cover",
                    backgroundOrigin: "padding-box",
                    backgroundClip: "border-box",
                }}
            >
                <Box pl={4} width={"100%"} height={"95%"} sx={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                    <Box fontSize={"50px"} fontWeight={700} textAlign={"center"}>
                        Query Forge - Unleash the Power of SQL
                    </Box>
                    <Box fontSize={"24px"} fontWeight={500} color={"#2026d2"} maxWidth={"700px"} textAlign={"center"} mt={1}>
                        Unleash the Speed, Precision, and Ease of Crafting SQL Queries – A New Era in Database Querying
                    </Box>
                    <Link to={'/editor'} style={{textDecoration: "none"}}>
                        <Box
                            fontSize={"30px"} fontWeight={700}
                            mt={10} color={"#f05"}
                            sx={{
                                transition: "transform 0.2s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.1)"
                                },
                            }}
                        >
                            Try Now
                        </Box>
                    </Link>
                    <Box></Box>
                </Box>
            </Box>
        </>
    );
}

export default Home;
