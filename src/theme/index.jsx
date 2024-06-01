import { CssBaseline } from "@mui/material"
import { useMemo } from "react"
import PropTypes from "prop-types"

import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material/styles"

import rtlPlugin from "stylis-plugin-rtl"
import { prefixer } from "stylis"
import { CacheProvider } from "@emotion/react"
import createCache from "@emotion/cache"

import { palette } from "./palette"
import { shadows } from "./shadows"
import { typography } from "./typography"
import {overrides} from "./overrides"
import { customShadows } from "./custom-shadows"
import { useTranslation } from "react-i18next"

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});
const cacheLtr = createCache({
  key: 'mui',
});

export default function ThemeProvider({ children }) {
  const { i18n } = useTranslation()
  const memoizedValue = useMemo(()=>
    ({
      direction: i18n.dir(),
      palette: palette(),
      shadows: shadows(),
      customShadows: customShadows(),
      typography,
      shape: { borderRadius: 8},
  }), 
  [i18n])
  const theme = createTheme(memoizedValue)
  theme.components = overrides(theme)
  return (
    <CacheProvider value={i18n.dir() === 'rtl' ? cacheRtl : cacheLtr}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node
}