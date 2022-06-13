describe('App e2e test', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
  });

  it('should login to app', () => {
    const demoAccount = {
      login: 'example@example.com',
      pass: 'example123',
    };

    cy.visit('http://localhost:3000/');

    const emailInput = cy.get('input[name="email"]');
    emailInput.type(demoAccount.login);

    const passwordInput = cy.get('input[name="password"]');
    passwordInput.type(demoAccount.pass);

    const loginButton = cy.get('button#login');
    loginButton.click();

    cy.url().should('include', '/');
  });

  it('should add training', () => {
    const trainingLogs = {
      date: '1999-12-24',
      time: '19:46',
      distance: '04.55',
      comments: 'City run',
    };
    const addTraining = cy.get('a[href="/add-training"]');

    addTraining.click();

    cy.url().should('include', '/add-training');

    const dateInput = cy.get('input[name="date"]');
    dateInput.type(trainingLogs.date);

    const timeInput = cy.get('input[name="time"]');
    timeInput.type(trainingLogs.time);

    const distanceInput = cy.get('input[name="distance"]');
    distanceInput.type(trainingLogs.distance);

    const commentsInput = cy.get('textarea[name="comments"]');
    commentsInput.type(trainingLogs.comments);

    const addButton = cy.get('button#add-training');
    addButton.click();

    cy.url().should('include', '/training-list');
  });
});
