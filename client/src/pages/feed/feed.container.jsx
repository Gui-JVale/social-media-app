import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GET_POSTS } from '../../graphql/queries';

import Feed from './feed.component';
import Spinner from '../../components/atoms/spinner/spinner.component';

const FeedContainer = () => {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return <Spinner />
  if (error) return <p>Error...{error}</p>

  console.log(data)

  return <Feed posts={data.posts} />
};

export default FeedContainer;