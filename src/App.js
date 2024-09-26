import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import Services from './pages/Services.js';
import Reports from './pages/Reports.js';
import Partners from './pages/Partners.js';
import About from './pages/About.js';
import ReactFullpage from '@fullpage/react-fullpage';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Section = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  overflow-y: auto;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <ReactFullpage
          scrollingSpeed={1000}
          scrollHorizontally={true}
          scrollBar={false}
          anchors={['home', 'services', 'reports', 'partners', 'about']}
          navigation={true}
          navigationPosition={'right'}
          navigationTooltips={['Home', 'Services', 'Reports', 'Partners', 'About']}
          render={({ state, fullpageApi }) => {
            return (
              <ReactFullpage.Wrapper>
                <Section className="section">
                  <Content>
                    <Home />
                  </Content>
                </Section>
                <Section className="section">
                  <Content>
                    <Services />
                  </Content>
                </Section>
                <Section className="section">
                  <Content>
                    <Reports />
                  </Content>
                </Section>
                <Section className="section">
                  <Content>
                    <Partners />
                  </Content>
                </Section>
                <Section className="section">
                  <Content>
                    <About />
                  </Content>
                </Section>
              </ReactFullpage.Wrapper>
            );
          }}
        />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;