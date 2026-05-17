// ============================================================
// TC-04 | Verify Header Logo Redirects to Homepage
// ============================================================
//
// STEPS:
// 1. Open /pricing
// 2. Click Telnyx logo in header
// 3. Assert user is redirected to homepage
// 4. Assert URL equals main domain
//
// EXPECTED RESULT:
// - User is redirected to homepage
// - URL equals https://telnyx.com or https://telnyx.com/
// ============================================================

describe('TC-04 | Header Logo Redirects to Homepage', () => {

  it('Clicking logo from /pricing returns user to homepage', () => {

    // Step 1. Open /pricing
    cy.visit('https://telnyx.com/pricing')

    // Step 2. Click Telnyx logo in header
    cy.get('header')
      .find('a[href="/"]')
      .first()
      .click()

    // Step 3. Assert user is redirected to homepage
    cy.get('h1').should('be.visible')

    // Step 4. Assert URL equals main domain
    cy.url().should('match', /https:\/\/telnyx\.com\/?$/)

  })

})
