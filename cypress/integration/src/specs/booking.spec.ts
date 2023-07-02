const nextMonth = (new Date().getMonth()+1)%12 + 1
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

describe('Challenge Exercise', () => {
  it('#1: Goes to booking.com main page', () => {
    cy.visit('/')
  })
  
  it('Close "save money" pop-up', () => { // Flaky step since sometimes this pop-up does not appear
    cy.on("fail", (err, runnable) => {
      console.log(err.message);
      return false;
    });

    cy.get('[aria-label="Dismiss sign-in info."]').click()
    cy.get('[aria-label="Dismiss sign-in info."]').should('not.exist')
  })

  it('#2: Type "Porto" in the destination input', () => {
    cy.get('[data-testid="destination-container"]').type('Porto, Portugal')
    cy.get('div[data-testid="autocomplete-result"]').contains('Porto').first().click()
    cy.get('input[placeholder="Where are you going?"]').invoke('val').should('include', 'Porto').should('include', 'Portugal')
  })
  
  it('#3: Check-in 1st of the next month', () => {
    cy.get(`span[data-date*="${nextMonth}-01"]`).click()
    cy.get(`span[data-date*="${nextMonth}-01"]`).invoke('attr', 'aria-checked').should('eq', 'true')
  })

  it('#4: Check-in 7th of the next month', () => {
    cy.get(`span[data-date*="${nextMonth}-07"]`).click()
    cy.get(`span[data-date*="${nextMonth}-07"]`).invoke('attr', 'aria-checked').should('eq', 'true')
  })

  it('#5: Click on Search', () => {
    cy.get('form div div button span').contains('Search').click()
    cy.url().should('include', '/searchresults')
  })

  it('#6: Print total number of properties found on the console', () => {
    cy.get('div[data-component="arp-header"] div div h1').invoke('text').as('properties')
    cy.get('@properties').then((properties) => {
      cy.log(properties.split(" ")[1].replace(",", ""))
    })
  })

  it('#7: Verify the Check-in date on the left is the 1st of next month', () => {
    cy.get('button[data-testid="date-display-field-start"]').invoke('text').should('include', ' 1').should('include', months[nextMonth - 1])
  })

  it('#8: Verify the Check-in date on the left is the 7th of next month', () => {
    cy.get('button[data-testid="date-display-field-end"]').invoke('text').should('include', ' 7').should('include', months[nextMonth - 1])
  })

  it('#9: Print the names of the properties found on this first page', () => {
    cy.get('div[data-testid="property-card"] div[data-testid="title"]').each( $title => {
      cy.log($title.get(0).innerText)
    })
  })
})
