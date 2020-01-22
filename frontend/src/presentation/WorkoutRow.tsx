import React from "react"
import {Rep} from "../model/Rep"

export interface WorkoutRowProps {
    readonly rep: Rep
}

export const WorkoutRow = (props: WorkoutRowProps) =>
    <tr>
        <td>{props.rep.session}</td>
        <td>{props.rep.grouping}</td>
        <td>{props.rep.reps}</td>
        <td>{props.rep.distance}</td>
        <td>{props.rep.interval}</td>
        <td>{props.rep.intensity}</td>
    </tr>
