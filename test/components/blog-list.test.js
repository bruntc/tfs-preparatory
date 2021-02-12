import "jsdom-global/register"; //at the top of file, even before importing React
/* setup.js */
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

Enzyme.configure({ adapter: new Adapter() });

import * as React from "react";
import { mount, shallow } from "enzyme";
var chai = require("chai");
var expect = chai.expect;
import Blog from "../../components/blog-list";

const allPostsData = [
  { id: 1, date: "12/1/2011", title: "title" },
  { id: 2, date: "12/1/2011", title: "title2" },
];

describe("Blog list component", () => {
  it("should render with header", function () {
    const wrap = shallow(<Blog allPostsData={allPostsData} />);
    expect(wrap.find("h2").text()).to.equal("Blog");
  });
});
