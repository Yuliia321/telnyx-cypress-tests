/// <reference types="cypress" />

// ============================================================
// TC-01 | Verify Navigation Dropdown Opens
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Hover over Products in top navigation
// 3. Verify product links become visible
// 4. Verify dropdown contains links
// 5. Verify all links have valid href
//
// EXPECTED RESULT:
// - Products dropdown is displayed
// - Product links are visible
// - Each link has valid href
// ============================================================

describe('TC-01 | Navigation Dropdown Opens', () => {

  it('Products dropdown opens on hover and contains valid links', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Hover over Products in top navigation
    cy.get('header').contains('Products').click()

    // Step 3 & 4. Verify product links appear in dropdown
    cy.get('a[href^="/products/"]', { timeout: 10000 })
      .should('be.visible')
      .and('have.length.greaterThan', 0)

    // Step 5. Verify all links have valid href
    cy.get('a[href^="/products/"]').each(($link) => {

      const href = $link.attr('href')

      expect(href).to.not.be.empty
      expect(href).to.not.equal('#')
    })

  })

})