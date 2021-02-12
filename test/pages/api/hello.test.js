import handler from "../../../src/pages/api/hello";
import { createMocks } from "node-mocks-http";
var chai = require("chai");
var expect = chai.expect;

it("hello test", () => {
  const { req, res } = createMocks({
    method: "GET",
  });
  handler(req, res);

  expect(res._getStatusCode()).to.equal(200);

  expect(JSON.parse(res._getData())).to.deep.equal({
    text: "Hello",
  });
});

export {};
