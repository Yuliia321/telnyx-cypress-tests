// ============================================================
// TC-10 | Verify Browser Back Navigation Works
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Navigate to Pricing page
// 3. Click browser Back button
// 4. Assert user returns to homepage
// 5. Assert homepage content is visible
//
// EXPECTED RESULT:
// - User returns to homepage
// - Homepage content is visible
// ============================================================

describe('TC-08 | Browser Back Navigation Works', () => {

  it('Back button returns user to homepage from /pricing', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Save homepage URL to check later
    cy.url().as('homeUrl')

    // Step 2. Navigate to Pricing page
    cy.visit('https://telnyx.com/pricing')
    cy.url().should('include', '/pricing')

    // Step 3. Click browser Back button
    cy.go('back')

    // Step 4. Assert user returns to homepage
    cy.get('@homeUrl').then((homeUrl) => {
      cy.url().should('eq', homeUrl)
    })

    // Step 5. Assert homepage content is visible
    cy.get('h1').should('be.visible')
    cy.get('header').should('be.visible')

  })

})