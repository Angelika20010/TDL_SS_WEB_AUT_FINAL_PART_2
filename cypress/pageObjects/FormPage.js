import BasePage from "./Base.page";

class FormPage extends BasePage{
    static get url(){
        return "https://demoqa.com/";
    }

    static get Forms(){
        return cy.get(':nth-child(2) > :nth-child(1) > .card-up')
    }

    static get PraktForm(){
        return cy.get(':nth-child(2) > .element-list > .menu-list > #item-0')
    }

    static get name(){
        return cy.get('#firstName')
    }
    static get surname(){
        return cy.get('#lastName')
    }
    static get email(){
        return cy.get('#userEmail')
    }
    static get gender(){
        return cy.get('#gender-radio-2')
    }
    static get mobile(){
        return cy.get('#userNumber')
    }

    static get calend(){
        return cy.get('#dateOfBirthInput')
    }
    static get Setmonth(){
        return cy.get('[class="react-datepicker__month-select"]')
    }
    static get Setyear(){
        return cy.get('[class="react-datepicker__year-select"]')
    }
    static get Setday(){
        return cy.get('[class="react-datepicker__day react-datepicker__day--029"]');
    }
    static get subject(){
        return cy.get('.subjects-auto-complete__value-container')
    }
   
    static get Hobby(){
        return cy.get('#hobbies-checkbox-3')
    }
    static get CurrentAddress(){
        return cy.get('#currentAddress')
    }
    static get State(){
        return cy.get('[class=" css-yk16xz-control"]')
    }
    static get State2(){
        return cy.get('#react-select-3-option-0');
    }
    static get City(){
        return cy.get('[class=" css-yk16xz-control"]');
    }
    static get City2(){
        return cy.get('#react-select-4-option-0');
    }
    static get SubmitButton(){
        return cy.get('#submit');
    }
    static get Validvalues(){
        return cy.get('[class="table table-dark table-striped table-bordered table-hover"]');
    }


}
export default FormPage;