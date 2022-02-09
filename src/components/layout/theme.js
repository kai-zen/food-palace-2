import { createTheme } from "@mui/material";
import { amber, orange } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: amber[600]
        },
        secondary: {
            main: orange[800]
        },
    },
});