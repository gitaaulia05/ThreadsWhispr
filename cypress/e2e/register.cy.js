/**
 * - Register spec
 *   - should display register page correctly
 *   - should display alert when Fullname is empty
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when fullname, email and password are wrong
 *   - should display login page  when fullname, email and password are correct
 */

describe('Register spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/register');
  });

  it('should display register page correctly', () => {
    cy.contains('h2', 'Create account').should('be.visible');
    cy.get('input[placeholder="John Doe"]').should('be.visible');
    cy.get('input[placeholder="name@example.com"]').should('be.visible');
    cy.get('input[placeholder="••••••••"]').should('be.visible');
    cy.contains('button', 'Register').should('be.visible');
  });

  
  it('should display alert when Fullname is empty', () => {
    cy.get('input[placeholder="name@example.com"]').type('test@gmail.com');
    cy.get('input[placeholder="••••••••"]').type('test');
    cy.contains('button', 'Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" is not allowed to be empty');
    });
  });

  it('should display alert when email is empty', () => {
    cy.get('input[placeholder="John Doe"]').type('test');
    cy.get('input[placeholder="••••••••"]').type('test');
    cy.contains('button', 'Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[placeholder="John Doe"]').type('test');
    cy.get('input[placeholder="name@example.com"]').type('test@gmail.com');
    cy.contains('button', 'Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when fullname, email and password are wrong', () => {
    cy.get('input[placeholder="John Doe"]').type('test');
    cy.get('input[placeholder="name@example.com"]').type('test@gmail.com');
    cy.get('input[placeholder="••••••••"]').type('test');
    cy.contains('button', 'Register').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"name" or "email" or "password" is wrong');
    });
  });

  it('should display login page  when fullname, email and password are correct', () => {
    cy.get('input[placeholder="John Doe"]').type('test');
    cy.get('input[placeholder="name@example.com"]').type('test@gmail.com');
    cy.get('input[placeholder="••••••••"]').type('test');
    cy.contains('button', 'Register').click();
    cy.url().should('include', '/');
  });

});