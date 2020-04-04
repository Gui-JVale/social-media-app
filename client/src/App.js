import React from 'react';
import './App.styles.sass';

import { Switch, Route, Redirect} from 'react-router-dom';

import Header from './components/layout/header/header.component';
import Container from './components/general/container/container.component';
import Feed from './pages/feed/feed.component';
import ProfilePage from './pages/profile/profile.component';
import Footer from './components/layout/footer/footer.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Feed} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
