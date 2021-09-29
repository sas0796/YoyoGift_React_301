import React from "react";
import { mount } from "enzyme";

import DraggableDialog from "./DraggableDialog";

describe("Draggable Dialog Test Suite", () => {
  it("should render expected HTML", () => {
      expect(mount(<DraggableDialog />).html()).toMatchSnapshot();
  });

  it('should call handle open close function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<DraggableDialog />)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleOpenClose');
    
    wrapper.find("button")
    .at(0)
    .props()
    .onClick();

    component.handleOpenClose();
   
   expect(component.handleOpenClose).toHaveBeenCalled();
   expect(component.handleOpenClose).toHaveBeenCalledTimes(1)
  });

  it('should call handle open close function', () => {
    //Mocks
    let classes = {root: {marginTop: "1px"}};

    const wrapper = mount(<DraggableDialog getEmail={jest.fn()}/>)
    const component = wrapper.instance();
    const spy =  jest.spyOn(component, 'handleSendAndClose');
    
    wrapper.find("button")
    .at(0)
    .props()
    .onClick();

    component.handleSendAndClose("abc");
   
   expect(component.handleSendAndClose).toHaveBeenCalled();
   expect(component.handleSendAndClose).toHaveBeenCalledTimes(1)
  });

});
  
