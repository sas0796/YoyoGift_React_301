import React from "react";
import { mount } from "enzyme";

import ErrorPage from "./ErrorPage";

describe("Error Page Test Suite", () => {
  it("should render expected HTML", () => {
      expect(mount(<ErrorPage />).html()).toMatchSnapshot();
  });
});