import Page from './page'
import CONSTANTS from "../constants"

class LandingPage extends Page {

    get saveMoneyPopupCloseButton(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('button[aria-label="Dismiss sign-in info."]')
    }

    closeSaveMoneyPopup(): void {
        this.saveMoneyPopupCloseButton.click()
    }

    get destinationContainer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('div[data-testid="destination-container"]')
    }

    get destinationInput(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get('input[placeholder="Where are you going?"]')
    }

    get destinationInputValue(): Cypress.Chainable<string> {
        return this.destinationInput.invoke('val')
    }

    typeInDestinationContainer(option: string): void {
        this.destinationContainer.click().type(option)
    }

    get searchResults(): Cypress.Chainable<JQuery<HTMLElement>> { 
        return cy.get('div[data-testid="autocomplete-result"]')
    }

    findResultsWith(option: string): Cypress.Chainable<JQuery<HTMLElement>>  {
        return this.searchResults.contains(option)
    }

    selectFirstResult(option: string): void {
        this.findResultsWith(option).first().click()
    }

    getDateWith(day: string, month: string): Cypress.Chainable<JQuery<HTMLElement>>  {
        return cy.get(`span[data-date*="${month}-0${day}"]`)
    }

    selectDateWith(day: string, month: string): void {
        this.getDateWith(day, month).click()
    }

    isDateChecked(day: string, month: string): Cypress.Chainable<string> {
        return this.getDateWith(day, month).invoke('attr', 'aria-checked')
    }

    get searchButton(): Cypress.Chainable<JQuery<HTMLElement>> { 
        return cy.get('button[type="submit"]').contains('Search')
    }
    
    clickSearchButton(): void {
        this.searchButton.click()
    }
}

export default new LandingPage(CONSTANTS.URL.BASE)