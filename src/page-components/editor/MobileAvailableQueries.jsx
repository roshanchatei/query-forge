import {useState} from 'react';
import {Box, Tooltip, IconButton, Dialog, Hidden} from "@mui/material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TableSize from "./TableSize";
const MobileAvailableQueries = ({pageSize, setPageSize, setCurrentPage, selectedQueryId, setSelectedQueryId, setIsQueryExecuted}) =>  {

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box display={"flex"} justifyContent={"space-between"} px={2}>
                <Hidden mdUp>
                    <TableSize pageSize={pageSize} setPageSize={setPageSize} setCurrentPage={setCurrentPage} />
                </Hidden>
                <Tooltip title="Saved Queries" arrow>
                    <IconButton onClick={handleClickOpen}>
                        <BookmarksIcon color={"primary"} />
                    </IconButton>
                </Tooltip>
            </Box>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                hello
            </Dialog>
        </>
    );
}

export default MobileAvailableQueries;
