import { createContext, ReactNode, useEffect, useState, FC } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  handleChangeTheme: () => void;
  lightMode: boolean;
}

interface Props {
  children: ReactNode;
}

export const themeContext = createContext({} as ThemeContextProps);

export const ThemeContext: FC<Props> = ({ children }) => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  const darkTheme: object = {
    colors: {
      background: "#141D2F",
      themeBtn: "#fff",
      card: "#1E2A47",
      textNorm: "#fff",
      textBolded: "#FFF",
    },
  };
  const lightTheme: object = {
    colors: {
      background: "#F6F8FF",
      themeBtn: "#4B6A9B",
      card: "#FEFEFE",
      textNorm: "#697C9A",
      textBolded: "#2B3442",
    },
  };

  const handleChangeTheme = (): void => setLightMode((c) => !c);

  useEffect(() => {
    (function () {
      if (
        localStorage.getItem("theme") &&
        localStorage.getItem("theme") === "light"
      ) {
        setLightMode(true);
      }
    })();
  }, []);

  useEffect(() => {
    const mode = lightMode ? "light" : "dark";

    localStorage.setItem("theme", mode);
  }, []);

  return (
    <>
      <themeContext.Provider value={{ lightMode, handleChangeTheme }}>
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
          {children}
        </ThemeProvider>
      </themeContext.Provider>
    </>
  );
};
