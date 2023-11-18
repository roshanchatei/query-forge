import {Box, IconButton, Tooltip } from "@mui/material";
import { TextField } from "@mui/material";
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import {queryList} from "../../constants/queryList";
const QueryEditor = ({selectedQueryId, setQueryOutput}) =>  {

    return (
        <>
            <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}}>
                <Box width={"100%"} px={2.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"} display={'flex'} alignItems={'center'} justifyContent={"space-between"}>
                    <Box display={'flex'} alignItems={'center'} py={1.5}>
                        <TerminalOutlinedIcon color={'primary'} />
                        <Box fontSize={"18px"} color={"#2026d2"} fontWeight={500} ml={0.5} mr={1}>
                            Editor
                        </Box>
                        <Tooltip title="Select any query from the Available Queries and click on Run" placement="right" arrow>
                            <InfoOutlinedIcon fontSize={"small"} sx={{color: "rgba(0, 0, 0, 0.6)"}}/>
                        </Tooltip>
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
                <Box px={1.5} py={1.5} height={"10vh"} bgcolor={"#f9f9f6"}>
                    <TextField
                        value={queryList[selectedQueryId].query}
                        variant="standard"
                        InputProps={{
                            disableUnderline: true,
                            style: {
                                fontFamily: 'monospace',
                                whiteSpace: 'pre-wrap',
                                fontSize: "15px"
                            },
                        }}
                        fullWidth
                        sx={{
                            backgroundColor: "#FFF",
                            padding: "7px 15px",
                            borderRadius: "5px"
                        }}
                    />
                </Box>
            </Box>
        </>
    );
}

export default QueryEditor;
