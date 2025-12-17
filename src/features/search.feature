Feature: Flipkart product search feature

  Background:
    Given User is on flipkart home page

  Scenario: Search for a product on flipkart
    When User searches for "iPhone"
    Then Search results should be displayed