package stepdefinitions;

import io.cucumber.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pages.LoginPage;
import pages.InventoryPage;
import utils.DriverManager;

public class LoginSteps {

    WebDriver driver = DriverManager.getDriver();
    LoginPage login = new LoginPage(driver);
    InventoryPage inventory = new InventoryPage(driver);

    @Given("user navigates to saucedemo login")
    public void openLoginPage() {
        login.open();
    }

    @When("user enters username {string}")
    public void enterUsername(String user) {
        login.setUsername(user);
    }

    @When("user enters password {string}")
    public void enterPassword(String pass) {
        login.setPassword(pass);
    }

    @When("user submits login")
    public void submitLogin() {
        login.submit();
    }

    @Then("user should see inventory page")
    public void checkInventory() {
        Assert.assertTrue(inventory.isLoaded());
        DriverManager.quitDriver();
    }

    @Then("error message should be shown")
    public void checkError() {
        Assert.assertFalse(login.getErrorText().isEmpty());
        DriverManager.quitDriver();
    }
}
