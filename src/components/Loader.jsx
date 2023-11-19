//Fallback Loader

import {Box, CircularProgress  } from "@mui/material";
const Loader = () =>  {

    return (
        <>
            <Box width={"100%"} height={"83vh"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <CircularProgress color={"primary"} size={50} />
            </Box>
        </>
    );
}

export default Loader;
