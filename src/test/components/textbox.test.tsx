import * as React from "react";
import { mount, shallow } from "enzyme";
var chai = require("chai");
var expect = chai.expect;
import { OurLabelledTextbox } from "../../components/textbox";

describe("Textbox component", () => {
    it("should render without throwing an error", function () {
      const wrap = shallow(<OurLabelledTextbox defaultText='Default text' label='Label title'/>);
      expect(wrap.find("label").text()).to.equal("Label title: ");
    });
  });