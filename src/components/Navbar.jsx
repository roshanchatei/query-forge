
import {AppBar, Box, Avatar, Hidden} from "@mui/material";
import Logo from '../assets/logo.jpg'
import { navbarLinks } from '../constants/navbarLinks'
import {Link} from "react-router-dom";
const Navbar = () =>  {


    return (
        <>
            <AppBar
                color={"transparent"}
                elevation={0}
                position="fixed"
                sx={{
                    background: '#d5d5d5',
                }}
            >
                <Box py={1.3} px={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                    <img src={Logo} alt={'Atlan logo'} height={'35px'} width={'auto'} />
                    <Box display={'flex'} alignItems={'center'}>
                        {
                            navbarLinks.map((each, index) => (
                                <Link to={each.link} key={index} target={each?.target} style={{textDecoration: "none"}}>
                                    <Box
                                        ml={3} color={"#2026d2"}
                                        fontSize={'16px'} fontWeight={500}
                                        sx={{
                                            "&:hover": {
                                                color: "#5e65ff",
                                            },
                                        }}
                                    >
                                        {each.title}
                                    </Box>
                                </Link>
                            ))
                        }
                        <Avatar src={'https://source.unsplash.com/featured/300x202'} alt={'Profile'} sx={{background: '#2026d2', marginLeft: "80px"}} />
                    </Box>
                </Box>
            </AppBar>
        </>
    );
}

export default Navbar;
