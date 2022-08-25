
import FormPage from "../pageObjects/FormPage";
import SortPage from "../pageObjects/SortPage";
import Sortable from "../pageObjects/SortPage";

describe("empty spec", () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/')
  })

  beforeEach(() => {
    FormPage.visit();
    
  });

  it("Scenario1", () => {
    Cypress.on('uncaught:exception', (err) => {
      
      console.log('Cypress detected uncaught exception: ', err);
      return false;
    });


    FormPage.Forms.click();
    FormPage.PraktForm.click();
    
    FormPage.name.type('Anzelika');
        FormPage.surname.type("Bureka");
        FormPage.email.type("name@example.com");
        FormPage.gender.click({force: true});
        FormPage.mobile.type("2324252627")
        FormPage.calend.click({froce: true});
        FormPage.Setmonth.select('February');
        FormPage.Setyear.select('1984');
        FormPage.Setday.click({force:true});
        FormPage.subject.click({force:true});
        FormPage.subject.type("Maths{enter}");
        FormPage.Hobby.click({force:true});
        FormPage.CurrentAddress.type("Riga");
        FormPage.State.click();
        FormPage.State2.click();
        FormPage.City.click();
        FormPage.City2.click();
        FormPage.SubmitButton.click({force:true});
        FormPage.Validvalues.should('contain.text','Anzelika Bureka');
        FormPage.Validvalues.should('contain.text','name@example.com');
        FormPage.Validvalues.should('contain.text','Female');
        FormPage.Validvalues.should('contain.text','2324252627');
        FormPage.Validvalues.should('contain.text','29 February,1984');
        FormPage.Validvalues.should('contain.text','Maths');
        FormPage.Validvalues.should('contain.text','Riga');
        FormPage.Validvalues.should('contain.text','NCR Delhi');
      

  });

  it("Scenario2", () => {
    Cypress.on('uncaught:exception', (err) => {
      
      console.log('Cypress detected uncaught exception: ', err);
      return false;
      

    });
    
    SortPage.Iter.click();
    SortPage.Sortable.click();
    SortPage.SortList.should('have.text','OneTwoThreeFourFiveSix');
    

  });

  




});