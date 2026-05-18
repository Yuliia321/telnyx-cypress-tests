

// ============================================================
// TC-09 | Verify Main Page Loads Without Critical Errors
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Wait for page load
// 3. Verify hero section is visible
// 4. Verify main navigation is visible
//
// EXPECTED RESULT:
// - Homepage loads successfully
// - Main content is displayed
// - Navigation is visible
// ============================================================

describe('TC-09 | Main Page Loads Without Critical Errors', () => {

  it('Homepage loads and main content is visible', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Wait for page load (Cypress waits automatically)

    // Step 3. Verify hero section is visible
    cy.get('h1').should('contain', 'Infrastructure for real-time agents')

    // Step 4. Verify main navigation is visible
    cy.get('header').should('be.visible')

  })

})