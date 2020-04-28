# Minimal Mocking Axios Demo

There are 3 files involved in this:

1. `src/__mocks__/axios.js`: This is used by jest to [mock](https://jestjs.io/docs/en/manual-mocks) the real axios module while running tests... we aren't really using this mock as we'll override it in each test.
2. `src/linkValidate.js`: This is our actual code that we want to test
3. `src/linkValidate.test.js`: Our tests... we import axios, although this is the mocked axios thanks to Jest detecting our special `__mocks__` folder... we will mock it for each of the 2 tests with a success, and later a failure. Then we'll make sure our code did what it was expected to do.
