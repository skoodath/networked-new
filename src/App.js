import React from "react";
import {
  Header,
  Landing,
  Intro,
  About,
  Fellowship,
  Seasons,
  Contact,
  Footer,
} from "./components";
import GlobalStyle from "./styles/global.styles";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactGA.initialize("UA-175890664-1");
ReactGA.pageview("/");

const App = () => {
  return (
    <>
      <Helmet>
        <title>networkED: A new way of thinking for children</title>
        <meta
          name="description"
          content="Enhance cognitive functions of children using network representations from real world experiences."
        />
        <meta
          property="og:title"
          content="networkED: A new way of thinking for children"
        />
        <meta
          property="og:description"
          content="Enhance cognitive functions of children using network representations from real world experiences."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.networked.in/" />
        <meta property="twitter:site" content="https://www.networked.in/" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route 
              index
              element={
                <>
                  <Landing />
                  <Intro />      
                </>
            } />
            <Route path="about" element={<About />} />
            <Route path="fellowship" element={<Fellowship />} />
            <Route path="seasons" element={<Seasons />} />
          </Route>
          
        </Routes>
      <Contact />
      <Footer />
      </BrowserRouter>
      <GlobalStyle />
    </>
  );
};

export default App;
