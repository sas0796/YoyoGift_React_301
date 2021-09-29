import React from "react";
import { mount } from "enzyme";

import DatePickers from "./datePicker";

describe("Date Picker Test Suite", () => {
  it("should render expected HTML", () => {
    let classes = {
      container: {marginTop: "1px"},
      label: {marginTop: "1px"},
      defaultValue: {marginTop: "1px"},
      textField: {marginTop: "1px"}
    };
    expect(mount(<DatePickers classes={classes} />).html()).toMatchSnapshot();
  })
})


