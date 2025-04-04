# 🍬 Sweet Shop - Cypress Test Automation


![Cypress](https://img.shields.io/badge/Cypress-Testing-green?logo=cypress)  
Automated end-to-end testing for the **Sweet Shop** web application using **Cypress**.

🛒 **Live App**: [https://sweetshop.netlify.app](https://sweetshop.netlify.app)

---

## 📝 Description

The project includes automated Cypress tests that verify the core functionalities of the **Navigation Bar**, **Sweets**, **About**, **Login**, and **Basket** pages.

These features are thoroughly tested using:
- **7 Test Scenarios (TS)**
- **47 Test Cases (TC)**

All Test Scenarios (TS) and Test Cases (TC) are described in the **TestCases.md** file.  

Additionally, the identified functional test cases have been registered and automated as Tasks in Jira. Relevant information can be found in the **JiraProject/JiraSummary.md** file.

---
## 🔁 Folder Structure

<pre> ``` SWEETSHOP_PROJECT ├── .github/ │ └── workflows/ # GitHub Actions workflow for CI ├── cypress/ │ ├── e2e/ # End-to-end test specs │ │ ├── about.cy.js │ │ ├── account.cy.js │ │ ├── basket.cy.js │ │ ├── checkout.cy.js │ │ ├── login.cy.js │ │ ├── navigationBar.cy.js │ │ └── sweets.cy.js │ ├── fixtures/ # Test data (example.json) │ ├── reports/ # Test reports │ ├── screenshots/ # Failure screenshots │ ├── support/ # Custom Cypress commands │ │ └── commands.js │ └── e2e.js # Cypress setup ├── JiraProject/ # Jira-related documentation ├── node_modules/ # Dependencies ├── .gitignore # Git ignore file ├── cypress.config.js # Cypress configuration ├── package.json # Dependencies & scripts ├── package-lock.json # Dependency lockfile └── TestCases.md # Test cases documentation ``` </pre>

---
## 🔧 Installation

### 1️⃣ Prerequisites
```
Node.js  
npm 
```

### 2️⃣ Clone the Repository

```
git clone https://github.com/AukseMaz/Sweetshop_Project.git
```
### 3️⃣ Install Dependencies
```
npm install
```
---

## 🧪 Running Tests
### Run Cypress in UI Mode
```
npm run cy:open
```
### Run Cypress in CLI Mode
```
npm run cy:run
```
---

## ⚙️ Cypress Commands
| Command                          | Purpose                       |
|----------------------------------|-------------------------------|
| `cy.visitMainPage()`             | Visit homepage                |
| `cy.visitSweetsPage()`           | Visit sweets catalog          |
| `cy.visitAboutPage()`            | Visit about page              |
| `cy.visitLoginPage()`            | Go to login                   |
| `cy.visitBasketPage()`           | Go to basket                  |
| `cy.addItemToBasket(index)`     | Add a specific sweet          |
| `cy.addRandomItemsToBasket(min, max)` | Add random number of sweets |
| `cy.fillCheckoutForm(...)`      | Fill out the entire checkout form |

---

## 🚀 CI/CD with GitHub Actions
The workflow is triggered on push and pull requests to the main branch.   
The GitHub Actions workflow **(.github/workflows/cypress.yml)** performs the following steps:

- Checks out the repository using actions/checkout@v4.
- Installs dependencies using npm install.
- Sets up Node.js version 18.
- Runs Cypress tests for end-to-end testing.
- Executes Cypress tests using cypress-io/github-action@v6. 

---
