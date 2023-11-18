import {Grid, Hidden, Box, IconButton, Tooltip } from "@mui/material";
import { TextField } from "@mui/material";
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const Editor = () =>  {

    return (
        <>
            <Grid container spacing={0} height={'auto'}>
                <Hidden mdDown>
                    <Grid item xs={0} md={3}>
                        <Box width={"100%"} p={1}>
                            <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}}>
                                <Box width={"100%"} px={2.5} py={1.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"}>
                                    <Box display={'flex'} alignItems={'center'}>
                                        <IntegrationInstructionsOutlinedIcon color={'primary'}  />
                                        <Box fontSize={"18px"} color={"#2026d2"} fontWeight={500} ml={0.5}>
                                            Available Queries
                                        </Box>
                                    </Box>
                                </Box>
                                <Box p={1.5} height={"calc(100vh - 130px)"} bgcolor={"#f9f9f6"}>
                                    asd
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={9}>
                    <Box width={"100%"} p={1} pl={0.5}>
                        <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}}>
                            <Box width={"100%"} px={2.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"} display={'flex'} alignItems={'center'} justifyContent={"space-between"}>
                                <Box display={'flex'} alignItems={'center'} py={1.5}>
                                    <TerminalOutlinedIcon color={'primary'} />
                                    <Box fontSize={"18px"} color={"#2026d2"} fontWeight={500} ml={0.5}>
                                        Editor
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Tooltip title="Run" arrow>
                                        <IconButton>
                                            <PlayCircleOutlinedIcon color={"primary"} />
                                        </IconButton>
                                    </Tooltip>
                                    <Box ml={1} />
                                    <Tooltip title="Export" arrow>
                                        <IconButton>
                                            <DownloadOutlinedIcon color={"primary"} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                            <Box p={1.5} height={"10vh"} bgcolor={"#f9f9f6"}>
                                <TextField
                                    value={"SELECT * FROM articleData;"}
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                    }}
                                    fullWidth
                                    sx={{
                                        // backgroundColor: "#FFF",
                                        padding: "10px"
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}} mt={1.5}>
                            <Box width={"100%"} px={2.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"} display={'flex'} alignItems={'center'} justifyContent={"space-between"}>
                                <Box  display={'flex'} py={1.5} alignItems={'center'}>
                                    <TableRowsOutlinedIcon color={'primary'}  />
                                    <Box fontSize={"18px"} color={"#2026d2"} fontWeight={500} ml={0.5}>
                                        Output
                                    </Box>
                                </Box>
                                <Box display={'flex'} alignItems={'center'}>
                                    <Tooltip title="Previous" arrow>
                                        <IconButton>
                                            <NavigateBeforeIcon color={"primary"} />
                                        </IconButton>
                                    </Tooltip>
                                    <Box width={"50px"} textAlign={"center"}>
                                        1/7
                                    </Box>
                                    <Tooltip title="Next" arrow>
                                        <IconButton>
                                            <NavigateNextIcon color={"primary"} />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            </Box>
                            <Box p={1.5} height={"calc(90vh - 190px)"} bgcolor={"#f9f9f6"}>
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
