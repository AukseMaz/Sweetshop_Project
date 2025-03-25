## 1. About Page
### TS 1: Verify UI elements on the About page  
    - TC 1.1: Check the page has the title 'Sweet Shop Project'  
    - TC 1.2: Check the page has a description  
    - TC 1.3: Check the page has a banner and verify it contains the year 2018

## 2. Login Page
### TS 2.1: Verify UI elements on the Login page  

    - TC 2.1.1: Check the page has the 'Login' title and description  
    - TC 2.1.2: Check the page has 'Username' and 'Password' textboxes
    - TC 2.1.3: Check the page has a 'Login' button
    - TC 2.1.4: Check the page has a 'Forgot Password?' link (if applicable)
    - TC 2.1.5: Check if the login form fields have proper placeholders and labels
### TS 2.2: Verify Login Functionality  

    - TC 2.2.1: Successful login with valid username and password
    - TC 2.2.2: Attempt login with invalid username and valid password
    - TC 2.2.3: Attempt login with valid username and invalid password
    - TC 2.2.4: Attempt login with both invalid username and password
    - TC 2.2.5: Attempt login with empty username and password fields
    - TC 2.2.6: Attempt login with special characters in username or password
    - TC 2.2.7: Verify error message when the login fails
    - TC 2.2.8: Verify login button remains disabled until both fields are filled (if applicable)
    - TC 2.2.9: Verify if the user is redirected to the home/dashboard page upon successful login
    - TC 2.2.10: Verify the session is maintained after login (e.g., refreshing the page should keep the user logged in)

## 3. Home Page (Post-login Verification)
### TS 3.1: Verify Home Page UI elements
    - TC 3.1.1: Check the page displays a welcome message with the username
    - TC 3.1.2: Check the page displays a list of available products
    - TC 3.1.3: Check if the cart icon is visible and accessible

## 4. Product Listing Page
### TS 4.1: Verify Product Listing Page UI
    - TC 4.1.1: Check the page lists products with images, name, price, and description
    - TC 4.1.2: Check that products have an "Add to Cart" button
    - TC 4.1.3: Check filtering options (if any)

## 5. Cart Functionality
### TS 5.1: Verify Cart UI and Functionality
    - TC 5.1.1: Check adding an item to the cart updates the cart count
    - TC 5.1.2: Check removing an item updates the cart count and total price
    - TC 5.1.3: Check if cart items persist after refreshing the page

## 6. Checkout Page
### TS 6.1: Verify UI elements on the Checkout page
    - TC 6.1.1: Check the page has the title 'Your Basket'
TC 6.1.2: Check the page displays the billing address form with required fields
TC 6.1.3: Check the page displays the payment section with all necessary input fields
    - TC 6.1.4: Check the page displays the delivery method options (Collect & Standard   - Shipping)
TC 6.1.5: Check the page displays the promo code input field with a redeem button
    - TC 6.1.6: Check the 'Continue to checkout' button is present and enabled only when required fields are filled
### TS 6.2: Verify Billing Address Form Functionality
    - TC 6.2.1: Attempt submission with empty required fields (First Name, Last Name, Address, Country, City, Zip)
    - TC 6.2.2: Attempt submission with invalid email format
    - TC 6.2.3: Attempt submission with special characters in Name fields
    - TC 6.2.4: Attempt submission with Zip Code containing letters instead of numbers (if numeric format is expected)
### TS 6.3: Verify Payment Section Functionality
    - TC 6.3.1: Attempt submission with empty payment fields (Name on Card, Card Number, Expiration, CVV)
    - TC 6.3.2: Attempt submission with invalid card number format (e.g., fewer than 16 digits)
    - TC 6.3.3: Attempt submission with expired card date
    - TC 6.3.4: Attempt submission with invalid CVV (less than 3 digits or non-numeric)
### TS 6.4: Verify Promo Code Functionality
    - TC 6.4.1: Apply a valid promo code and check the discount is applied
    - TC 6.4.2: Apply an expired/invalid promo code and verify the error message
    - TC 6.4.3: Apply a promo code and then remove it to check if the total updates correctly
### TS 6.5: Verify Basket Functionality
    - TC 6.5.1: Check that the basket displays the correct total amount
    - TC 6.5.2: Click 'Empty Basket' and verify all items are removed
    - TC 6.5.3: Check if the basket updates when an item is removed or quantity is changed
