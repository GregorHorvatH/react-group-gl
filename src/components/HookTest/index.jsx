import React, { useEffect } from 'react';

const HookTest = () => {
  useEffect(() => {
    console.log('component did mount');

    return () => {
      console.log('component will unmount');
    };
  }, []);

  return <div>Hook Component</div>;
};

export default HookTest;
