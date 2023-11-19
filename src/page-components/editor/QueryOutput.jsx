import {Box, IconButton, Tooltip, Select, MenuItem, FormControl, TextField} from "@mui/material";
import TableRowsOutlinedIcon from '@mui/icons-material/TableRowsOutlined';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import OutputTable from "./OutputTable";
import {useState, useRef} from "react";

const QueryOutput = ({queryOutput, currentPage, setCurrentPage}) =>  {

    const tableRef = useRef(null);
    const [pageSize, setPageSize] = useState(10);

    const scrollToTop = () => {
        if(pageSize === 10)
            return;

        if (tableRef.current) {
            tableRef.current.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const handlePageSizeChange = (e) => {
        const newSize = parseInt(e.target.value, 10);
        setPageSize(newSize);
        setCurrentPage(1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
        scrollToTop()
    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
        scrollToTop()
    };

    const totalItems = queryOutput.length;
    const totalPages = Math.ceil(totalItems / pageSize);


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
                                <Box>
                                    Table Size:
                                </Box>
                                <TextField
                                    size={"small"}
                                    color={"primary"}
                                    value={pageSize}
                                    onChange={handlePageSizeChange}
                                    variant="standard"
                                    InputProps={{
                                        disableUnderline: true,
                                        style: {
                                            color: "#2026d2"
                                        },
                                    }}
                                    sx={{
                                        padding: "2px 5px",
                                        borderRadius: "5px",
                                        backgroundColor: "transparent",
                                        mt: 0.5,
                                        mr: 4
                                    }}
                                    select
                                    aria-label={"table size"}
                                >
                                    <MenuItem value={10}>10</MenuItem>
                                    <MenuItem value={20}>20</MenuItem>
                                    <MenuItem value={50}>50</MenuItem>
                                </TextField>

                                <IconButton onClick={handlePrevPage} disabled={currentPage === 1}>
                                    <NavigateBeforeIcon color={currentPage === 1 ? "disabled" : "primary"} />
                                </IconButton>
                                <Box width={"50px"} textAlign={"center"}>
                                    {currentPage}/{totalPages}
                                </Box>
                                <IconButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                                    <NavigateNextIcon color={currentPage === totalPages ? "disabled" : "primary"} />
                                </IconButton>
                            </Box>
                        )
                    }
                </Box>
                <Box px={2.5} pb={1.5} pt={2.5} height={"calc(90vh - 190px)"} bgcolor={"#f9f9f6"}>
                    <OutputTable tableRef={tableRef} result={queryOutput} currentPage={currentPage} pageSize={pageSize}/>
                </Box>
            </Box>
        </>
    );
}

export default QueryOutput;
