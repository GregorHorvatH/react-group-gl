// ========== Currying =============
import add from './utils/add';

// ========== react =============
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(<App />, document.getElementById('root'));

// ========== Currying =============

console.log(add(1)(1)(3)(5));
