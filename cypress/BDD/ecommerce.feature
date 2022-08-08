Feature: End to end Ecommerce validation

    Aplication Regression

    Scenario: Ecommerce products delivery
    Given a user that opens Ecommerce page
    When the user add items to the cart
    And the user validate the total price
    Then the user selects the country and verify the purchase
