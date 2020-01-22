import {Workout} from "../model/Workout"
import {createActionFactory} from "../util/action-util";

export interface WorkoutLoadedAction {
    readonly workout: Workout
}

export const workoutLoaded = createActionFactory<WorkoutLoadedAction>("WORKOUT-LOADED-ACTION")
