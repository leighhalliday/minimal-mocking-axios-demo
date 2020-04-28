import axios from "axios";
import { linkValidate } from "./linkValidate";

// we want a fresh start after each test
afterEach(() => {
  jest.clearAllMocks();
});

it("validates a valid link", async () => {
  // setup our mocked axios call
  axios.mockImplementation(() =>
    Promise.resolve({
      data: {},
      status: 200,
      statusText: "OK",
    })
  );

  // work
  const result = await linkValidate("123", "http://localhost:3000");

  // assertions / expects
  expect(result).toEqual({
    id: "123",
    status: 200,
    statusText: "OK",
  });
  expect(axios).toHaveBeenCalledTimes(1);
  expect(axios).toHaveBeenCalledWith("http://localhost:3000");
});

it("validates an invalid link", async () => {
  // setup
  axios.mockImplementation(() => Promise.reject({}));

  // work
  const result = await linkValidate("123", "http://localhost:3000");

  // assertions / expects
  expect(result).toEqual({
    id: "123",
    status: 404,
    statusText: "FAIL",
  });
  expect(axios).toHaveBeenCalledTimes(1);
  expect(axios).toHaveBeenCalledWith("http://localhost:3000");
});
