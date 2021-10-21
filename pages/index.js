import React, {useCallback, useState} from "react";
import ScrollToTop from "../components/Utils/ScrollToTop/ScrollToTop";
import Supporters from "../components/Home/Supporters/Supporters";
import Intro from "../components/Home/Intro/Intro";
import AppDownload from "../components/Home/AppDownload/AppDownload";
import About from "../components/Home/About/About";
import Facts from "../components/Home/Facts/Facts";
import Explore from "../components/Home/Explore/Explore";
import Projects from "../components/Home/Projects/Projects";
import { useTheme } from '../components/Utils/ThemeContext/ThemeContext';

function Home() {
  const { theme } = useTheme();

  return (
      <div className={theme.className}>
        <Intro />
        <About />
        <Facts />
        <Projects />
        <Explore />
        <Supporters />
        <AppDownload />
        <ScrollToTop
            icon="bi bi-caret-up-fill"
            backgroundColor = "#EB743B"
            position={{ bottom: "12%", right: "0%" }}
            hover={{ backgroundColor: "purple", opacity: "0.95" }}
            margin="24px"
        />
      </div>
  );
}

export default Home;
