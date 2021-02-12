import * as React from "react";
import { mount } from "enzyme";
var chai = require("chai");
var expect = chai.expect;
import About from "../../components/about";

describe("About component", () => {
  it("should render without throwing an error", function () {
    const wrap = mount(<About />);
    expect(wrap.find("p").text()).to.equal("About me");
  });
});
