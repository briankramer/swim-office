import React from "react"
import {Rep} from "../model/Rep"

export interface WorkoutRowProps {
    readonly rep: Rep
}

export const WorkoutRow = (props: WorkoutRowProps) =>
    <tr>
        <td data-test-handle={WorkoutRowTestHandles.Session}>{props.rep.session}</td>
        <td data-test-handle={WorkoutRowTestHandles.Grouping}>{props.rep.grouping}</td>
        <td data-test-handle={WorkoutRowTestHandles.Reps}>{props.rep.reps}</td>
        <td data-test-handle={WorkoutRowTestHandles.Distance}>{props.rep.distance}</td>
        <td data-test-handle={WorkoutRowTestHandles.Interval}>{props.rep.interval}</td>
        <td data-test-handle={WorkoutRowTestHandles.Intensity}>{props.rep.intensity}</td>
    </tr>

export enum WorkoutRowTestHandles {
    Session = "WORKOUT_ROW_SESSION",
    Grouping = "WORKOUT_ROW_GROUPING",
    Reps = "WORKOUT_ROW_REPS",
    Distance = "WORKOUT_ROW_DISTANCE",
    Interval = "WORKOUT_ROW_INTERVAL",
    Intensity = "WORKOUT_ROW_INTENSITY",
}
