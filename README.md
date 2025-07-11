# TypeScript Module Import Path Misconfiguration

## Task Description
A runtime error is occurring in a React TypeScript application when digital-only orders are placed: `Cannot read property 'city' of undefined` in the `OrderDetails.tsx` component. The API sometimes omits the `shippingAddress` field for digital products, but the TypeScript interface assumes it is always present and fully populated. An unsafe type assertion was used to avoid TypeScript errors, allowing runtime bugs into production. This is resulting in broken order summary UIs for affected users.

## Your Task
- Investigate the typing and runtime logic in the `OrderDetails.tsx` component and related interfaces.
- Refactor the code to correctly model the API's contract, ensuring `shippingAddress` is handled in a type-safe and robust way.
- Remove all unsafe type assertions related to `shippingAddress`.
- Ensure the component handles both types of orders (with or without address) safely, and that the UI stays correct and does not crash.

## Setup Instructions
1. Ensure you have Docker and Docker Compose installed.
2. Run the setup and start scripts:
    ```
    ./install.sh
    ./run.sh
    ```
3. Visit `http://localhost:3000` in your browser.

## Expected Outcomes
- The TypeScript interface for the API response accurately reflects when `shippingAddress` may be absent or incomplete.
- All unsafe type assertions related to `shippingAddress` are removed.
- The `OrderDetails.tsx` component renders address information only when available, preventing runtime crashes.
- TypeScript enforces robust and safe handling at compile time.
- The app displays order details correctly for both digital (no address) and physical (with address) orders.

## How to Verify Your Solution
- After making your changes, reload the app at `http://localhost:3000`.
- Confirm that both digital and physical orders display appropriate order details.
- There should be no TypeScript errors or runtime crashes, regardless of whether the order includes a shipping address.
