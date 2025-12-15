Feature: Flipkart Product Search

  Scenario: Search for a product on Flipkart
    Given user is on Flipkart home page
    When user searches for "iPhone"
    Then search results should be displayed
