import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus components", () => {
    test("status from props should be in local state", () => {
        const component = create(<ProfileStatus status="Statusik" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Statusik");
    });
    test("after creationg component span should be diplayed", () => {
        const component = create(<ProfileStatus status="Statusik" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span).not.toBeNull()
    });
    test("after creationg component input should not be diplayed", () => {
        const component = create(<ProfileStatus status="Statusik" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
    });
    test("after creating component span should contain stratus", () => {
        const component = create(<ProfileStatus status="Statusik" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe("Statusik")
    });
    test("input should be displayed instead of span", () => {
        const component = create(<ProfileStatus status="Statusik" />);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');
        expect(input.props.value).toBe("Statusik")
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status="Statusik" updateUserStatusThunkCreator={mockCallback}/>);
        const instance = component.getInstance();
        instance.saveStatus();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});
