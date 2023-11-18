import { useState } from 'react';
import {Grid, Hidden, Box } from "@mui/material";
import AvailableQueries from "./AvailableQueries";
import QueryEditor from "./QueryEditor";
import QueryOutput from "./QueryOutput";
const Editor = () =>  {

    const [executionTime, setExecutionTime] = useState(null);
    const [queryOutput, setQueryOutput] = useState([]);
    const [selectedQueryId, setSelectedQueryId] = useState(0);

    return (
        <>
            <Grid container spacing={0} height={'auto'}>
                <Hidden mdDown>
                    <Grid item xs={0} md={3}>
                        <AvailableQueries selectedQueryId={selectedQueryId} setSelectedQueryId={setSelectedQueryId} />
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={9}>
                    <Box width={"100%"} p={1} pl={0.5}>
                        <QueryEditor selectedQueryId={selectedQueryId} setQueryOutput={setQueryOutput} />
                        <QueryOutput queryOutput={queryOutput} />
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Editor;
