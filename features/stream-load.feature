Feature: Load test with 10 speakers
  @speaker
  Scenario: Open the speaker page with 10 speakers
    Given The speaker opens the speaker link
    When The speaker opens the camera
    Then I should see all 10 speakers camera feed