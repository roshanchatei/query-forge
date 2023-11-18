import {Grid, Hidden, Box} from "@mui/material";

const Editor = () =>  {

    return (
        <>
            <Grid container spacing={0} height={'auto'}>
                <Hidden mdDown>
                    <Grid item xs={0} md={3}>
                        <Box width={"100%"} p={1}>
                            <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}}>
                                <Box width={"100%"} p={1.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"}>
                                    Query
                                </Box>
                                <Box p={1.5} height={"calc(100vh - 125px)"} bgcolor={"#f9f9f6"}>
                                    asd
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={9}>
                    <Box width={"100%"} p={1} pl={0.5}>
                        <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}}>
                            <Box width={"100%"} p={1.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"}>
                                Editor
                            </Box>
                            <Box p={1.5} height={"10vh"} bgcolor={"#f9f9f6"}>
                                SELECT * FROM articleData;
                            </Box>
                        </Box>

                        <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}} mt={1.5}>
                            <Box width={"100%"} p={1.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"}>
                                Table
                            </Box>
                            <Box p={1.5} height={"calc(90vh - 180px)"} bgcolor={"#f9f9f6"}>
                                Select query to see the output
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Editor;
