
 export class LoginPage2{

    constructor(page){
        
        this.page=page;
        this.inputUserName = page.locator("#user-name");
        this.inputPassword = page.locator("#password");
        this.buttonLogin = page.locator("#login-button");
    
    }

    async loginCredentials(userName, password){
        await this.inputUserName.fill(userName);
        await this.inputPassword.fill(password);

        await this.buttonLogin.click();
    }


}