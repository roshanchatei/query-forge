import {AppBar, Box, Avatar, Hidden} from "@mui/material";
import {Link, useLocation} from "react-router-dom";

import Logo from '../assets/atlan-logo.svg'
import Profile from '../assets/profile.jpg'
import { navbarLinks } from '../constants/navbarLinks'

const Navbar = () =>  {

    //getting user's current path for conditional rendering
    const location = useLocation();

    return (
        <>
            <AppBar
                color={"transparent"}
                elevation={0}
                position="fixed"
                sx={{
                    background: location.pathname === '/' ? 'transparent' : '#e5e5e5',
                }}
            >
                <Box py={1.3} px={2} display={'flex'} alignItems={'center'} justifyContent={'space-between'} >
                    <Link to={'/'}>
                        <img src={Logo} alt={'Atlan logo'} height={'35px'} width={'auto'} />
                    </Link>

                    <Box display={'flex'} alignItems={'center'}>
                        <Hidden mdDown>
                            {
                                navbarLinks.map((each, index) => (
                                    <Link to={each.link} key={index} target={each?.target} style={{textDecoration: "none"}}>
                                        <Box
                                            ml={3} color={location.pathname === each.link ? "#f05" : "#2026d2"}
                                            fontSize={'16px'} fontWeight={600}
                                            sx={{
                                                "&:hover": {
                                                    color: "#f05",
                                                },
                                            }}
                                        >
                                            {each.title}
                                        </Box>
                                    </Link>
                                ))
                            }
                            <Avatar src={location.pathname === '/' ? '' : Profile} alt={'Profile'} sx={{background: '#2026d2', marginLeft: "80px"}} />
                        </Hidden>
                        <Hidden mdUp>
                            <Link to={'/'} style={{textDecoration: "none"}}>
                                <Box
                                    ml={3} color={location.pathname === '/' ? "#f05" : "#2026d2"}
                                    fontSize={'16px'} fontWeight={600}
                                >
                                    Home
                                </Box>
                            </Link>
                            <Link to={'/editor'} style={{textDecoration: "none"}}>
                                <Box
                                    ml={3} color={location.pathname === '/editor' ? "#f05" : "#2026d2"}
                                    fontSize={'16px'} fontWeight={600}
                                >
                                    Editor
                                </Box>
                            </Link>
                        </Hidden>
                    </Box>
                </Box>
            </AppBar>
        </>
    );
}

export default Navbar;
