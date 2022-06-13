describe('App e2e test', () => {
  beforeEach(() => {
    indexedDB.deleteDatabase('firebaseLocalStorageDb');
  });

  it('should open app', () => {
    cy.visit('http://localhost:3000/');
  });

  it('should render validation error if passing invalid login', () => {
    const invalidData = {
      loginFirstTry: 'example123',
      loginSecondTry: 'notexistingacc@example123.exec',
      pass: 'example123',
    };

    cy.get('input[name="email"]').type(invalidData.loginFirstTry);
    cy.get('input[name="password"]').type(invalidData.pass);
    cy.get('button#login').click();
    cy.get('#login-error-info').should('have.text', 'The email address is badly formatted.');

    cy.get('input[name="email"]').clear();
    cy.get('input[name="email"]').type(invalidData.loginSecondTry);
    cy.get('button#login').click();
    cy.get('#login-error-info').should(
      'have.text',
      'There is no user record corresponding to this identifier. The user may have been deleted.',
    );
  });

  it('should clear login inputs', () => {
    cy.get('input[name="email"]').clear();
    cy.get('input[name="password"]').clear();
  });

  it('should login to app', () => {
    const demoAccount = {
      login: 'example@example.com',
      pass: 'example123',
    };

    cy.get('input[name="email"]').type(demoAccount.login);
    cy.get('input[name="password"]').type(demoAccount.pass);

    cy.get('button#login').click();
    cy.url().should('include', '/');
  });

  it('should add training', () => {
    const trainingLogs = {
      date: '1999-12-24',
      time: '19:46',
      distance: '04.55',
      comments: 'Testing city run',
    };

    cy.get('a[href="/add-training"]').click();
    cy.url().should('include', '/add-training');

    cy.get('input[name="date"]').type(trainingLogs.date);
    cy.get('input[name="time"]').type(trainingLogs.time);
    cy.get('input[name="distance"]').type(trainingLogs.distance);
    cy.get('textarea[name="comments"]').type(trainingLogs.comments);
    cy.get('button#add-training').click();

    cy.url().should('include', '/training-list');
  });

  it('should delete added testing training', () => {
    cy.url().should('include', '/training-list');
    cy.wait(1000);
    cy.get('#training-table').find('th').contains('24/12/1999').parent().find('span.delete').click();
  });

  it('should open profile page', () => {
    cy.wait(1000);
    cy.get('a#profileDropdown').click();
    cy.get('ul[aria-labelledby="profileDropdown"]').contains('My profile').click();

    cy.url().should('include', '/profile');
  });

  it('should open navigation with label', () => {
    cy.get('button#main-nav').click();
    cy.get('#navigationLabel').contains('Navigation 🔥');
  });

  it('should navigate from opened sidebar to homepage', () => {
    cy.get('.offcanvas-body').find('a[href="/"]').click();

    cy.url().should('include', '/');
  });

  it('should navigate from closed sidebar to training list', () => {
    cy.get('button#main-nav').click();
    cy.get('.offcanvas-body').find('a[href="/training-list"]').click();

    cy.url().should('include', '/training-list');
  });

  it('should main logo navigate to main dashboard', () => {
    cy.get('nav.navbar').find('a[href="/"]').click();

    cy.url().should('include', '/');
  });

  it('should open new section from dashboard', () => {
    cy.url().should('include', '/');

    cy.get('#wrapper').find('a[href="/news"]').click();
  });

  it('should open first loaded news in modal and compare titles', () => {
    cy.url().should('include', '/news');
    cy.wait(3000);

    cy.get('#wrapper ul li')
      .first()
      .find('h2')
      .invoke('text')
      .then((text) => {
        cy.get('#wrapper ul li').first().find('button').contains('Details').click();
        cy.get('.news-modal').find('#newsModalLabel').should('have.text', text);
      });

    cy.wait(1000);
    cy.get('.news-modal').find('button[data-bs-dismiss="modal"]').click();
  });

  it('should logout from the app', () => {
    cy.get('button#main-nav').click();
    cy.get('.offcanvas-body').find('span').contains('Logout').click();

    cy.url().should('include', '/');
    cy.get('#login-section');
  });
});
