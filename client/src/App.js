import React from 'react';
import './App.sass';

import Header from './components/general/header/header.component';
import Container from './components/general/container/container.component';
import Feed from './pages/feed/feed.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Feed />
      </Container>
    </div>
  );
}

export default App;
