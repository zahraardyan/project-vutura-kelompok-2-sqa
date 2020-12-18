module.exports = function () {
    this.Given(/^user browse signin page$/, function () {
        helpers.loadPage('https://dashboard.vutura.io/signIn')
        
      });
      this.Given(/^user fill email field$/, function () {
        driver.then(function (){
            return page.fieldEmail.performFill();
        });
        
      });
      this.Given(/^user fill password field$/, function () {
        driver.then(function (){
            return page.fieldPw.performFill();
        });
      });
      this.Given(/^user click login button$/, function () {
        driver.then(function () {
            return page.loginBtn.performClick();

        });
    });
    this.Given(/^user click menu button$/, function () {
      driver.wait(until.elementsLocated(by.xpath("//i[@class='v-icon notranslate mdi mdi-menu theme--light white--text']")),100000).then(function () {
          return page.menuBtn.performClick();
          
        });
      });
      this.Given(/^user click profil button$/, function () {
        driver.wait(until.elementsLocated(by.xpath("//div[contains(text(),'Profil')]")),100000).then(function () {
            return page.profilBtn.performClick();
            
          });
        });
        this.Given(/^user click edit button$/, function () {
          driver.wait(until.elementsLocated(by.xpath("//button[@class='button float-right']")),100000).then(function () {
              return page.editlBtn.performClick();
              
            });
          });
          this.Given(/^user fill name field$/, function () {
            driver.then(function () {
                return page.fieldName.performFill();
                
              });
            });
            this.Given(/^user fill business field$/, function () {
              driver.then(function () {
                  return page.fieldBusiness.performFill();
                  
                });
              });
              this.Given(/^user fill number field$/, function () {
                driver.then(function () {
                    return page.fieldNumber.performFill();
                    
                  });
                });
                this.When(/^user click restore button$/, function () {
                  driver.wait(until.elementsLocated(by.xpath("//button[normalize-space()='Perbarui']")),100000).then(function () {
                      return page.restoreBtn.performClick();
                    });
                  });
                  this.Then(/^user see the profile edited$/, function () { //tidak bisa jalan, harus di develop
                    return driver.findElements(by.xpath("//img[@src='vutura.png']"))
            
                        .then(function (elements){
            
                            //verify this element has children
                            expect(elements.length).to.equal(0);
                        });
                });
            }