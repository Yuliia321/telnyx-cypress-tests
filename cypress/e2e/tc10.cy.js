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

describe('TC-10 | Browser Back Navigation Works', () => {

  it('Back button returns user to homepage from /pricing', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Navigate to Pricing page
    cy.visit('https://telnyx.com/pricing')

    // Step 3. Click browser Back button
    cy.go('back')

    // Step 4. Assert user returns to homepage
    cy.url().should('eq', 'https://telnyx.com/')

    // Step 5. Assert homepage content is visible
    cy.get('h1').should('contain', 'Infrastructure for real-time agents')

  })

})