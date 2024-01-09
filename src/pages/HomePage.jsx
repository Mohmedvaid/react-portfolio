// src/pages/HomePage.jsx
import React from "react";

import Page from "../components/Page";
import Title from "../components/Title";
import Section1 from "../components/Sections/Section1";
import Section2 from "../components/Sections/Section2";
import Section3 from "../components/Sections/Section3";

const HomePage = () => (
  <Page>
    <Title />
    <Section1 />
    <Section2 />
    <Section3 />
  </Page>
);

export default HomePage;
