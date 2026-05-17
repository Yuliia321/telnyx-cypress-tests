
// ============================================================
// TC-09 | Verify Main Page Loads Without Critical Errors
// ============================================================
//
// STEPS:
// 1. Open homepage
// 2. Wait for page load
// 3. Verify hero section is visible
// 4. Verify no broken images exist
//
// EXPECTED RESULT:
// - Homepage loads successfully
// - Main content is displayed
// - No broken image elements found
// ============================================================

describe('TC-09 | Main Page Loads Without Critical Errors', () => {

  it('Homepage returns status 200', () => {

    // Step 1. Open homepage via HTTP request and check status
    cy.request('https://telnyx.com/')
      .its('status')
      .should('equal', 200)

  })

  it('Hero section is visible after page load', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Wait for page load (Cypress waits automatically)
    // Step 3. Verify hero section is visible
    cy.get('h1').should('be.visible')
    cy.get('header').should('be.visible')

  })

  it('No broken images on homepage', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 4. Verify no broken images exist
    // Check first 10 images to keep test fast
    cy.get('img').then(($imgs) => {
      const srcs = [...$imgs]
        .map((el) => el.getAttribute('src'))
        .filter((src) => src && !src.startsWith('data:'))
        .slice(0, 10)

      srcs.forEach((src) => {
        const url = src.startsWith('http') ? src : `https://telnyx.com${src}`
        cy.request({ url, failOnStatusCode: false })
          .its('status')
          .should('be.lessThan', 400)
      })
    })

  })

})
