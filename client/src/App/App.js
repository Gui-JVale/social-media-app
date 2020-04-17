import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.styles.sass';


import Header from '../components/layout/header/header.component';
import Container from '../components/layout/container/container.component';
import { default as Feed} from '../pages/feed/feed.container';
import ProfilePage from '../pages/profile/profile.component';
import Footer from '../components/layout/footer/footer.component';
import AuthPage from '../pages/auth/auth.component';
import SubmitPostPage from '../pages/submit-post/submit-post.component';
import PrivateRoute from '../components/general/private-route/private-route.component';
import PostPage from '../pages/post/post.component';


function App({ currentUser }) {
  return (
    <div className="App">
      <Header />
      <Container>
        <Switch>
          <Route exact path="/" component={Feed} />

          <PrivateRoute path="/profile" component={ProfilePage} currentUser={currentUser} />

          <PrivateRoute path="/create-post" component={SubmitPostPage} currentUser={currentUser} />

          <PrivateRoute path="/posts/:postId" component={PostPage} currentUser={currentUser} />

          <Route path="/auth" component={AuthPage} />  
        </Switch>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
