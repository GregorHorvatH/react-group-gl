import React from 'react';

import MyComponent1 from './MyComponent1';
import MyComponent2 from './MyComponent2';
import MyComponent3 from './MyComponent3';
import MovieList from '../../components/MovieList';
import Toggler from '../../hoc/Toggler';

const user = { name: 'Bobby', age: 15 };

const HOC = () => (
  <div className="hoc">
    <h3>Higher Order Component (HOC)</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia illo
      ipsam fuga velit voluptate necessitatibus nesciunt, asperiores magnam
      iusto minus ex consequatur esse sapiente provident dignissimos? Impedit
      molestiae eum doloribus.
    </p>
    <MovieList />
    <MyComponent1 />
    <MyComponent2 extraProp="my extra props" user={{ name: 'Bobby' }} />
    <Toggler>
      {({ isOpen, onToggle }) => (
        <>
          <button type="button" onClick={onToggle}>
            {isOpen ? 'Hide' : 'Show'}
          </button>
          {isOpen && <MyComponent3 user={user} />}
        </>
      )}
    </Toggler>
  </div>
);

export default HOC;
