import React from 'react';
import ReactDOM from 'react-dom';

import '~/assets/scss/styles/index.scss';

// function App() {
//   return (
//     <Provider store={store}>
//       <KeycloakProvider
//         keycloak={keycloak}
//         initConfig={keycloakInitConfig}
//         onTokens={setAuthorizationCookie}
//       >
//         <LayoutRouter />
//       </KeycloakProvider>
//     </Provider>
//   );
// }

ReactDOM.render(<h1>Build success</h1>, document.getElementById('root'));

// eslint-disable-next-line
console.log('Build success');
