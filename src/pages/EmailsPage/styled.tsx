import { styled } from "@mui/material/styles";
import List from "@mui/material/List";

export const StyledList = styled(List)(({ theme }) => ({
    minWidth: 400,
    width: 400,
    padding: 0,
    backgroundColor: theme.palette.grey[100],
    overflow: 'auto',
}));