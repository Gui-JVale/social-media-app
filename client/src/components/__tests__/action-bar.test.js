import React from 'react';
import { unmountComponentAtNode } from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Cta from '../general/cta/cta.component';
import ActionBar from '../general/action-bar/action-bar.component';

describe('<ActionBar />', () => {
  let wrapper = null;
  let container = null;
  let tree = null;

  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement('div');
    document.body.appendChild(container);

    // setup component for test
    wrapper = shallow(
      <ActionBar>
        <Cta text="test1" />
        <Cta text="test2" />
        <Cta text="test3" />
      </ActionBar>,
    );
    tree = renderer
      .create(
        <ActionBar>
          <Cta text="test1" />
          <Cta text="test2" />
          <Cta text="test3" />
        </ActionBar>,
      )
      .toJSON();
  });

  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  it('Renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
