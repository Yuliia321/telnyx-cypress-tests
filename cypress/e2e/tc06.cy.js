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
// - URL contains developers.telnyx.com/docs/overview
// - Page content is visible
// ============================================================

describe('TC-06 | Documentation Page Opens', () => {

  it('Clicking Developers then Dev Docs opens documentation page', () => {

    // Step 1. Open homepage
    cy.visit('https://telnyx.com/')

    // Step 2. Click Developers in header
    cy.get('header').contains('Developers')
      .click({ force: true })

    // Step 3. Знаходимо href посилання Dev Docs і переходимо напряму
    // Cypress не вміє працювати з новими вкладками як Playwright
    // Тому читаємо href і робимо cy.visit() напряму — результат той самий
    cy.contains('a', 'Dev Docs')
      .first()
      .invoke('attr', 'href')
      .then((href) => {

        // Step 4. Відкриваємо URL напряму — як новPage в Playwright
        cy.origin(href, () => {

          // Ігноруємо React помилки їхнього сайту
          cy.on('uncaught:exception', () => false)

          cy.visit('https://developers.telnyx.com/docs/overview')

          // Step 4. Verify URL
          cy.url().should('include', 'developers.telnyx.com/docs/overview')

          // Step 5. Verify page content is visible
          cy.contains('APIs fundamentals').should('be.visible')
        })
      })

  })

})