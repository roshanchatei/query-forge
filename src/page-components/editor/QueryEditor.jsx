import {queryList} from "../../constants/queryList";
import { useSnackbar } from "notistack";
import { CSVLink } from "react-csv";
import {jsonData} from "../../utils/dataGenerator";
import {getQueryOutput} from "../../utils/getQueryOutput";

import {Box, IconButton, Tooltip, TextField } from "@mui/material";
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const QueryEditor = ({queryOutput, selectedQueryId, setQueryOutput, isQueryExecuted, setIsQueryExecuted, setCurrentPage}) =>  {

    const { enqueueSnackbar } = useSnackbar();

    //selected query execution
    const executeQuery = () => {
        setCurrentPage(1)
        const startTime = performance.now();
        const executedOutput = getQueryOutput(jsonData, queryList[selectedQueryId].parsedQuery);
        setQueryOutput(executedOutput)
        const endTime = performance.now();
        const timeTaken = (endTime - startTime).toFixed(2);

        //showing execution time to user
        enqueueSnackbar(`Query executed in ${timeTaken} ms`, {
            variant: "success",
        });
        setIsQueryExecuted(true)
    }

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
                            <IconButton onClick={executeQuery} disabled={isQueryExecuted}>
                                <PlayCircleOutlinedIcon color={isQueryExecuted? "disabled" : "primary"} />
                            </IconButton>
                        </Tooltip>
                        <Box ml={1} />
                        {
                            queryOutput.length > 0 && (
                                <CSVLink
                                    data={queryOutput}
                                    filename={"dataOutput.csv"}
                                >
                                    <Tooltip title="Export" arrow>
                                        <IconButton>
                                            <DownloadOutlinedIcon color={"primary"} />
                                        </IconButton>
                                    </Tooltip>
                                </CSVLink>
                            )
                        }
                    </Box>
                </Box>
                <Box px={1.5} py={1.5} height={'12.5vh'} bgcolor={"#f9f9f6"}>
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
                        aria-label={"query input"}
                        multiline
                        rows={2}
                    />
                </Box>
            </Box>
        </>
    );
}

export default QueryEditor;
