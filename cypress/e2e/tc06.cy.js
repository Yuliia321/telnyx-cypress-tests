
// ============================================================
// TC-06 | Verify Documentation Page Opens
// ============================================================
//
// STEPS:
// 1. Open https://telnyx.com
// 2. Click "Developers" in header
// 3. Click Dev Docs link
// 4. Verify URL contains developers.telnyx.com
// 5. Verify page content is visible
//
// EXPECTED RESULT:
// - URL contains developers.telnyx.com
// - Page content is visible
// ============================================================

describe('TC-06 | Documentation Page Opens', () => {

  it('Clicking Developers then Dev Docs opens documentation page', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Click Developers in header
    cy.get('header').contains('Developers').click({ force: true })

    // Step 3. Click Dev Docs link
    cy.contains('a', 'Dev Docs')
      .first()
      .invoke('removeAttr', 'target')
      .click({ force: true })

    // Step 4. Verify URL contains developers.telnyx.com
    cy.origin('https://developers.telnyx.com', () => {

      // ігноруємо JS помилки на сторінці документації
      cy.on('uncaught:exception', () => false)

      cy.url().should('include', 'developers.telnyx.com')

      // Step 5. Verify page content is visible
      cy.contains('APIs fundamentals').should('be.visible')
    })

  })

})