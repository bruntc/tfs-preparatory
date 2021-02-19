import * as React from "react";
import { mount, shallow } from "enzyme";
var chai = require("chai");
var expect = chai.expect;
import { Button } from "../../components/button";

describe("Button component", () => {
    it("should render without throwing an error", function () {
      const wrap = shallow(<Button buttonText='Test Button'/>);
      expect(wrap.find("button").text()).to.equal("Test Button");
    });
  });