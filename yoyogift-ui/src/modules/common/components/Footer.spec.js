import React from "react";
import { mount } from "enzyme";

import Footer from "./Footer";

describe("Footer Test Suite", () => {
  it("should render expected HTML", () => {
    //Mocks
    let classes = { root: { marginTop: "2px" } }
    expect(mount(<Footer classes={classes}/>).html()).toMatchSnapshot();
  });
});