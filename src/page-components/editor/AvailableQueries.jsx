import {Box} from "@mui/material";
import IntegrationInstructionsOutlinedIcon from '@mui/icons-material/IntegrationInstructionsOutlined';
import {queryList} from "../../constants/queryList";
const AvailableQueries = ({selectedQueryId, setSelectedQueryId}) =>  {

    return (
        <>
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
                    <Box px={2.5} py={1.5} height={"calc(100vh - 130px)"} bgcolor={"#f9f9f6"}>
                        {
                            queryList.map((each, index) => (
                                <Box
                                    key={index}
                                    width={"100%"} mb={2}
                                    bgcolor={"#FFF"} py={0.5} pl={1}
                                    borderRadius={"3px"} color={each.u_id === selectedQueryId ? "#2026d2" : ""}
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "#2026d2",
                                        },
                                    }}
                                    onClick={() => setSelectedQueryId(each.u_id)}
                                >
                                    <code>
                                        {each.query}
                                    </code>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default AvailableQueries;
