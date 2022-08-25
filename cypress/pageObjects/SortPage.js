import BasePage from "./Base.page";

class SortPage extends BasePage{
    static get url(){
        return "https://demoqa.com/";
    }
    static get Iter(){
        return cy.get(':nth-child(5) > :nth-child(1) > .card-up')
    }
    static get Sortable(){
        return cy.get(':nth-child(5) > .element-list > .menu-list > #item-0 ')
    }
    static get SortList(){
        return cy.get('.vertical-list-container')
        // return cy.get('#demo-tabpane-list')
    }
    static get SortList1(){
        return cy.get('[class="list-group-item list-group-item-action"]')
    }




}
export default SortPage;