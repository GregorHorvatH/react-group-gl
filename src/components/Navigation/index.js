import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import UserContext from '../../context/UserContext';

const Navigation = ({ routes }) => {
  const { user } = useContext(UserContext);

  return (
    <div className="navigation">
      {routes.map(({ label, path, exact, needsAuth }) =>
        (needsAuth && user) || !needsAuth ? (
          <NavLink
            className="link"
            activeClassName="active"
            to={path}
            exact={exact}
            key={path}
          >
            {label}
          </NavLink>
        ) : null,
      )}
    </div>
  );
};

// const Navigation = ({ routes }) => (
//   <UserContext.Consumer>
//     {({ user }) => (
//       <div className="navigation">
//         {routes.map(({ label, path, exact, needsAuth }) =>
//           (needsAuth && user) || !needsAuth ? (
//             <NavLink
//               className="link"
//               activeClassName="active"
//               to={path}
//               exact={exact}
//               key={path}
//             >
//               {label}
//             </NavLink>
//           ) : null,
//         )}
//       </div>
//     )}
//   </UserContext.Consumer>
// );

export default Navigation;
