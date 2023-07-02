//PAGE OBJECTS
import LandingPage from '../page-objects/landing.page';
import ResultsPage from '../page-objects/results.page';

//CONSTANTS
import CONSTANTS from "../constants";

describe('Challenge Exercise', () => {
  before('Open Booking Landing Page', () => {
    LandingPage.open() //1. go to the booking main page (https://www.booking.com)
  })

  it('Closes Save Money pop up', () => {
    // ACTIONS
    LandingPage.ignoreFailure()
    LandingPage.closeSaveMoneyPopup()

    // ASSERTIONS
    LandingPage.saveMoneyPopupCloseButton.should('not.exist')
    LandingPage.destinationInputValue.should('have.value', CONSTANTS.EMPTY_STRING)
  })
  
  it('Fill in the search form (place, from, to)', () => {
    // ACTIONS
    LandingPage.typeInDestinationContainer(`${CONSTANTS.SEARCH.CITY}, ${CONSTANTS.SEARCH.COUNTRY}`) //2. Where it says ‘Where are you going’, enter ‘Porto’
    LandingPage.selectFirstResult(CONSTANTS.SEARCH.CITY)
    LandingPage.selectDateWith(CONSTANTS.SEARCH.FROM, CONSTANTS.NEXT_MONTH) //3. Check-in: 1st of the next month
    LandingPage.selectDateWith(CONSTANTS.SEARCH.TO, CONSTANTS.NEXT_MONTH) //4. Check-out: 7th of the next month
    
    // ASSERTIONS
    LandingPage.destinationInputValue.should('include', CONSTANTS.SEARCH.CITY).should('include', CONSTANTS.SEARCH.COUNTRY)
    LandingPage.isDateChecked(CONSTANTS.SEARCH.FROM, CONSTANTS.NEXT_MONTH).should('eq', 'true')
    LandingPage.isDateChecked(CONSTANTS.SEARCH.FROM, CONSTANTS.NEXT_MONTH).should('eq', 'true')
  })

  it('Press the search button', () => {
    // ACTIONS
    LandingPage.clickSearchButton() //5. Click on Search
    
    // ASSERTIONS
    cy.url().should('include', CONSTANTS.URL.RESULTS)
    ResultsPage.dateStartText.should('include', ` ${CONSTANTS.SEARCH.FROM}`).should('include', CONSTANTS.MONTHS[Number(CONSTANTS.NEXT_MONTH) - 1]) //7. Verify the Check-in date on the left is the 1st of next month
    ResultsPage.dateEndText.should('include', ` ${CONSTANTS.SEARCH.TO}`).should('include', CONSTANTS.MONTHS[Number(CONSTANTS.NEXT_MONTH) - 1]) //8. Verify the Check-out date on the left is the 7th of next month
    
    // LOGS
    ResultsPage.logPropertyNumber //6. Print total number of properties found on the console
    ResultsPage.logPropertyNames //9. Print the names of the properties found on this first page

  })
})
