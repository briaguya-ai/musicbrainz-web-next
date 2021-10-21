import React, { useContext, useState } from 'react'

export const themes = {
  default: {
    className: 'theme',
  },
  purple: {
    className: 'theme-purple',
  },
  // forceDark: {
  //
  // },
  // forceLight: {
  //
  // }
}

export const ThemeContext = React.createContext({
  theme: undefined,
  setTheme: async (theme) => null,
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.default)

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
