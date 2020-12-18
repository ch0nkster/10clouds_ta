describe('User finds all open positions with \'Automation\' in job title', () => {
  it('Opens 10clouds Careers tab', () => {
    cy.get('span')
      .contains('Careers')
      .click()
  })
  it('Searches for \'Automation\' in job offers', () => {
    cy.get('#search-job')
      .type('Automation')
  })
  it('Sees only \'Automation\' job offers', () => {
    cy.get('.job-offer__title')
      .each(($el, index) => {
        cy.get($el).contains('Automation')
      })
  })
})