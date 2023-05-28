# Lab 8 - Starter

Group Members: Hunter Trieu and Harish Vasanth

1) I would fit the automated tests within a Github action that runs whenever code is pushed. This is because it should be automated, so it should be test that runs whenever a new change is made to ensure the quality is up to standard. 

2) No, since E2E testing is more relevant in determining whether the behavior of a user's actions is as expected. In contrast, for determining whether a function's output is correct, we should be using unit testing that more directly analyzes whether a function works properly on different inputs.

3) No, there are too many different messages and features associated with it. Unit tests are meant to check functionality and edge cases, not necessarily an entire feature. It might be better to split this up into multiple different unit tests to test the different features or utilize E2E testing to more holistically determine what the user will see when interacting with the messaging feature.

4) Yes, this can be an easy edge case to test using a unit test. Just make a message with over 80 characters and test it. Presumably, this feature is implemented with a fairly simplistic function, which would then make unit testing fairly trivial.