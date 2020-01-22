import React from "react"
import {WorkoutRow, WorkoutRowProps, WorkoutRowTestHandles} from "./WorkoutRow"
import {shallow, ShallowWrapper} from "enzyme"
import {testHandleSelector} from "../container-testing";

describe(WorkoutRow.name, () => {
    let wrapper: ShallowWrapper

    beforeAll(() => {
        const props: WorkoutRowProps = {
            rep: {
                reps: 1,
                distance: 2,
                interval: 3,
                intensity: "a",
                session: 4,
                grouping: 5
            }
        }

        wrapper = shallow(<WorkoutRow{...props}/>)
    })

    it("has a reps cell", () => {
        expect(wrapper.find(testHandleSelector(WorkoutRowTestHandles.Reps)).text()).toEqual("1")
    })

    it("has a distance cell", () => {
        expect(wrapper.find(testHandleSelector(WorkoutRowTestHandles.Distance)).text()).toEqual("2")
    })

    it("has a interval cell", () => {
        expect(wrapper.find(testHandleSelector(WorkoutRowTestHandles.Interval)).text()).toEqual("3")
    })

    it("has a intensity cell", () => {
        expect(wrapper.find(testHandleSelector(WorkoutRowTestHandles.Intensity)).text()).toEqual("a")
    })

    it("has a session cell", () => {
        expect(wrapper.find(testHandleSelector(WorkoutRowTestHandles.Session)).text()).toEqual("4")
    })

    it("has a grouping cell", () => {
        expect(wrapper.find(testHandleSelector(WorkoutRowTestHandles.Grouping)).text()).toEqual("5")
    })
})
