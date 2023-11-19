import {useState} from 'react';
import {Box, Tooltip, IconButton, Dialog, Hidden} from "@mui/material";
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import TableSize from "./TableSize";
import AvailableQueries from "./AvailableQueries";
import CloseIcon from '@mui/icons-material/Close';
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
                <Box width={"100%"} position={"relative"}>
                    <Box position={"absolute"} top={"5px"} right={"5px"}>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <AvailableQueries
                        p={0} br={"0"} height={"calc(100vh - 50px)"}
                        selectedQueryId={selectedQueryId} setOpen={setOpen}
                        setSelectedQueryId={setSelectedQueryId}
                        setIsQueryExecuted={setIsQueryExecuted}
                    />
                </Box>

            </Dialog>
        </>
    );
}

export default MobileAvailableQueries;
