import React from "react"
import {Workout} from "../model/Workout";
import {WorkoutRow} from "./WorkoutRow";

export interface WorkoutTableProps {
    readonly workout: Workout
}

export interface WorkoutTableDispatchProps {
}

export const WorkoutTable = (props: WorkoutTableProps) =>
    <div>
        <table className="table">
            <tbody>
                <tr>
                    <th>Session</th>
                    <th>Grouping</th>
                    <th>Reps</th>
                    <th>Distance</th>
                    <th>Interval</th>
                    <th>Intensity</th>
                </tr>
                {
                    props.workout.reps.map((rep, index) => {
                        return <WorkoutRow key={index} rep={rep}/>
                    })
                }
            </tbody>
        </table>
    </div>
