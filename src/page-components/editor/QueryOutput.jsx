import {Box, IconButton, Tooltip } from "@mui/material";
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const QueryOutput = ({queryOutput}) =>  {

    return (
        <>
            <Box width={"100%"} borderRadius={"12px"} sx={{overflow: "hidden"}} mt={1.5}>
                <Box width={"100%"} px={2.5} bgcolor={"#ededed"} borderBottom={"1px solid rgba(137,137,137,.1)"} display={'flex'} alignItems={'center'} justifyContent={"space-between"}>
                    <Box  display={'flex'} py={1.5} alignItems={'center'}>
                        <TableRowsOutlinedIcon color={'primary'}  />
                        <Box fontSize={"18px"} color={"#2026d2"} fontWeight={500} ml={0.5}>
                            Output
                        </Box>
                    </Box>
                    {
                        queryOutput.length > 0 && (
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
                        )
                    }
                </Box>
                <Box px={2.5} py={1.5} height={"calc(90vh - 190px)"} bgcolor={"#f9f9f6"}>
                    Select query to see the output
                </Box>
            </Box>
        </>
    );
}

export default QueryOutput;
