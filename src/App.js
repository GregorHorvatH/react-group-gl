import React from 'react';
import Todos from './components/Todos';
import Clock from './components/Clock';
// import News from './components/News';
import Toggler from './components/Toggler';

const App = () => (
  <div className="todo-list">
    <Clock a={123} b={345} c={678} />

    <Toggler>
      {({ isOpen, onToggle }) => {
        return (
          <>
            <button onClick={onToggle}>Push me</button>

            {isOpen && (
              <>
                <h3>Hello</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit accusantium dolores, explicabo beatae sequi veritatis
                  ullam commodi vel cumque possimus asperiores ipsa aperiam
                  nobis expedita voluptatum sed doloremque repudiandae ab.
                </p>
              </>
            )}
          </>
        );
      }}
    </Toggler>

    <Todos />
    {/* <News /> */}
  </div>
);

export default App;
