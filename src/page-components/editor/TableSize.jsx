import { useCallback } from 'react';
import {Box, MenuItem, TextField} from "@mui/material";

const TableSize = ({pageSize, setPageSize, setCurrentPage}) =>  {

    const handlePageSizeChange = useCallback(
        (e) => {
            const newSize = parseInt(e.target.value, 10);
            setPageSize(newSize);
            setCurrentPage(1);
        },
        [setPageSize, setCurrentPage]
    );

    return (
        <>
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
                    }}
                    select
                    aria-label={"table size"}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={50}>50</MenuItem>
                </TextField>
            </Box>
        </>
    );
}

export default TableSize;
