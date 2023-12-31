Feature: Inventory

    @smoke
    Scenario Outline: Demo Inventory
        Given Login to inventory web app
        Then Inventory page should list <NumberOfProducts>
        Then Validate all products have valid price

        Examples:
            | TestID    | NumberOfProducts |
            | INV TC001 | 6                |