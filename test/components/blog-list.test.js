import * as React from "react";
import { shallow } from "enzyme";
var chai = require("chai");
var expect = chai.expect;
import Blog from "../../src/components/blog-list";

const allPostsData = [
  { id: 1, date: "12/1/2011", title: "title" },
  { id: 2, date: "12/1/2011", title: "title2" },
];

describe("Blog list component", () => {
  it("should render with header", function () {
    const wrap = shallow(<Blog allPostsData={allPostsData} />);
    expect(wrap.find("h2").text()).to.equal("Blog");
  });

  it("should render with data", function () {
    const wrap = shallow(<Blog allPostsData={allPostsData} />);
    expectChildElements(wrap, 2);
  });

  it("should render with no data", function () {
    const wrap = shallow(<Blog allPostsData={[]} />);
    expect(wrap.find("h2").text()).to.equal("Blog");
    expectChildElements(wrap, 0);
  });
});

const expectChildElements = (wrap, no) => {
  expect(wrap.find("Link").length == no).to.be.true;
  expect(wrap.find("Date").length == no).to.be.true;
};
