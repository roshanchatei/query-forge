import {useState} from 'react';
import {Grid, Hidden, Box} from "@mui/material";
import AvailableQueries from "../page-components/editor/AvailableQueries";
import QueryEditor from "../page-components/editor/QueryEditor";
import QueryOutput from "../page-components/editor/QueryOutput";
import MobileAvailableQueries from "../page-components/editor/MobileAvailableQueries";
const Editor = () =>  {

    const [isQueryExecuted, setIsQueryExecuted ] = useState(false)
    const [queryOutput, setQueryOutput] = useState([]);
    const [selectedQueryId, setSelectedQueryId] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    return (
        <>
            <Hidden mdUp>
               <MobileAvailableQueries
                   pageSize={pageSize} setPageSize={setPageSize}
                   setCurrentPage={setCurrentPage} setIsQueryExecuted={setIsQueryExecuted}
                   selectedQueryId={selectedQueryId} setSelectedQueryId={setSelectedQueryId}
               />
            </Hidden>

            <Grid container spacing={0} height={'auto'}>
                <Hidden mdDown>
                    <Grid item xs={0} md={3}>
                        <AvailableQueries
                            p={1} br={"12px"} height={"calc(100vh - 130px)"}
                            selectedQueryId={selectedQueryId}
                            setSelectedQueryId={setSelectedQueryId}
                            setIsQueryExecuted={setIsQueryExecuted}
                        />
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={9}>
                    <Box width={"100%"} p={1} pl={{xs: 1, md: 0.5}}>
                        <QueryEditor
                            queryOutput={queryOutput} selectedQueryId={selectedQueryId}
                            isQueryExecuted={isQueryExecuted} setIsQueryExecuted={setIsQueryExecuted}
                            setQueryOutput={setQueryOutput} setCurrentPage={setCurrentPage}
                        />
                        <QueryOutput
                            queryOutput={queryOutput}
                            currentPage={currentPage} setCurrentPage={setCurrentPage}
                            pageSize={pageSize} setPageSize={setPageSize}
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Editor;
