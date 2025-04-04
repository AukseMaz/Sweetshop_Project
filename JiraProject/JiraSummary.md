# JIRA.md

## Project: Sweet Shop
Website: [https://sweetshop.netlify.app](https://sweetshop.netlify.app)

## Testing Summary

- **Testing Duration**: 3 Sprints (1 week each)
- **Test Methodology**: Automated
- **Tasks in Jira**: Functional test cases registered as individual tasks
- **Defects Logged**: 5 (All categorized as bugs)

---

## Defect Summary

### 🐞 Bug 1: Navigation from Basket to About Page
- **Test Case**: `TC_1.19`.
- **Pre-condition**: User is on the "Basket" page.
- **Steps**: Click "About" in the navbar.
- **Expected**: "About" page should load with title and description.
- **Actual**: Error message "Page not found".
- 💡**Severity**: ***Medium***. Affects navigation and informational content, but not core purchase flow. 

![TC_1.19 Navigation Bug](/JiraProject/screenshots/failure1.png)
---

### 🐞 Bug 2: Product Image Missing
- **Test Case**: `TC_2.3`
- **Pre-condition**: Products available in the system.
- **Steps**: Verify each product has name, price, image, and "Add to Basket" button.
- **Expected**: All products should display full info.
- **Actual**: Wham Bar product image is missing. Others display correctly.
- 💡**Severity**: ***Low***. Affects UI/UX and trust, but functionality is intact.  

![TC_2.3 Sweets Bug](/JiraProject/screenshots/failure2.png)

---

### 🐞 Bug 3: Social Media Links Inactive
- **Test Case**: `TC_4.3`
- **Pre-condition**: User is on the Login page.
- **Steps**: Click on Twitter, Facebook, LinkedIn icons.
- **Expected**: Should open correct pages in a new tab.
- **Actual**: Links are visible but not clickable.
- 💡**Severity**: ***Low***. Non-functioning links affect external engagement, not core app usage. 

![TC_4.3 Login Bug](/JiraProject/screenshots/failure3.png)

---

### 🐞 Bug 4: Incorrect Basket Total with Standard Shipping
- **Test Case**: `TC_6.3`
- **Pre-condition**: Product added to basket, user on Basket page.
- **Steps**: Select "Standard Shipping (£1.99)" and verify total.
- **Expected**: Total = product(s) price + £1.99
- **Actual**: Total incorrectly displayed as £NaN instead of £6.69.  
- 💡**Severity**: ***High***. Critical pricing error; directly affects payment and user trust.  

![TC_6.3 Login Bug](/JiraProject/screenshots/failure4.png)

---

### 🐞 Bug 5: Checkout Form Clears Valid Inputs
- **Test Case**: `TC_7.3`
- **Pre-condition**: User is on the Basket page.
- **Steps**: Fill in billing and payment info, click "Continue to checkout".
- **Expected**: Form should proceed to order confirmation.
- **Actual**: Valid inputs are cleared without any progress.
- 💡**Severity**: ***Critical***. Blocks user from completing purchase, major blocker.  

![TC_7.3 Login Bug](/JiraProject/screenshots/failure5.png)

---



