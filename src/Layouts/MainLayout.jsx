import React from "react";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "./Theme";
import {CacheProvider} from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";


const cachRTL = createCache({
    key :"muirtl",
    stylisPlugins: [rtlPlugin]
})


const MainLayout = ({children}) => {
    return(
        <React.Fragment>
            <CacheProvider value={cachRTL}>
                <ThemeProvider theme={theme}>
                        {children}
                </ThemeProvider>
            </CacheProvider>
        </React.Fragment>
    )
}
export default MainLayout;