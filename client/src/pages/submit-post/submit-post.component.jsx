import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_CURRENT_USER } from '../../graphql/queries';

import Profile from '../../components/profile/profile/profile.component';
import Spinner from '../../components/atoms/spinner/spinner.component';
import { default as CreatePostForm } from '../../containers/create-post-form.container';
import { default as EditPostForm } from '../../containers/edit-post-form.container';

const SubmitPostPage = ({ match }) => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);

  if (loading) return <Spinner />;
  if (error) return <p>Error: {error}</p>;

  const isLoggedIn = !!data.currentUser;

  const currentUser = isLoggedIn ? data.currentUser : null;
  return (
    <div className="submit-post-page">
      <Profile
        isPost
        username={currentUser.username}
        profileImgUrl={currentUser.picture}
      />
      {match.params.postId ? <EditPostForm /> : <CreatePostForm />}
    </div>
  );
};

export default SubmitPostPage;
