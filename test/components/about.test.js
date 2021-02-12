import "jsdom-global/register"; //at the top of file, even before importing React
/* setup.js */
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

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
