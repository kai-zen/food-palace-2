import { createTheme } from "@mui/material";
import { amber, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            main: amber[400]
        },
        secondary: {
            main: red[800]
        },
    },
});