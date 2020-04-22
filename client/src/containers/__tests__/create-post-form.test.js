import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import wait from 'waait';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { renderApollo } from '../../test-utils';

import { CREATE_POST } from '../../graphql/mutations';
import { GET_POSTS } from '../../graphql/queries';

import CreatePostContainer from '../create-post-form.container';

describe('<CreatePostFormContainer /> -- CONTAINER', () => {
  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('renders the create post form component', () => {
    act(() => {
      renderApollo(<CreatePostContainer.WrappedComponent />, { container });
    });
    expect(container.querySelector('#submit-post-form')).not.toBe(null);
  });

  it('interacts with cached data correctly', async () => {
    const post = {
      id: 1,
      body: "I'm a test",
      dropdownHidden: true,
      likesCount: 0,
      author: {
        id: 1,
        username: 'test_username',
      },
    };

    const mocks = [
      {
        request: { query: CREATE_POST, variables: { body: "I'm a test" } },
        result: { data: { createPost: post } },
      },
    ];

    const resolvers = {
      Post: {
        dropdownHidden: true,
      },
    };

    const cache = new InMemoryCache();

    act(() => {
      renderApollo(<CreatePostContainer.WrappedComponent />, {
        container, cache, mocks, resolvers, addTypename: false,
      });
    });

    const bodyInput = document.getElementsByName('body');
    const submitButton = document.querySelector('[type="submit"]');

    act(() => {
      bodyInput.value = "I'm a test";
    });

    expect(bodyInput.value).toBe("I'm a test");

    // act(() => {
    //   submitButton.dispatchEvent(new MouseEvent('click'), { bubbles: true })
    // });

    // await wait(0)
  });
});
