$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Saucedemo Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful login with valid credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user navigates to saucedemo login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submits login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.submitLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see inventory page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.checkInventory()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login fails with wrong password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user navigates to saucedemo login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"standard_user\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"wrongpass\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submits login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.submitLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.checkError()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login fails with empty username",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user navigates to saucedemo login",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.openLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.enterUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"secret_sauce\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.enterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user submits login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.submitLogin()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "error message should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.checkError()"
});
formatter.result({
  "status": "passed"
});
});