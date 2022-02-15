import { createTheme } from "@mui/material";
import { amber, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: amber[600]
        },
        secondary: {
            main: red[800]
        },
    },
});