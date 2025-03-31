// ***********************************************************
import './commands';

import 'cypress-mochawesome-reporter/register';

// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//     const screenshot = `screenshots/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
//     addContext({ test }, screenshot);
//   }
// });
