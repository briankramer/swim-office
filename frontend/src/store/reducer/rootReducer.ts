import {Action} from "redux"
import {AppState} from "../../model/AppState"
import {DEFAULT_STATE} from "../default-state";
import {workoutLoaded} from "../../actions/workoutLoaded";
import {isAction} from "../../util/action-util";

export default (previousState: AppState = DEFAULT_STATE, action: Action): AppState => {
    if (isAction(workoutLoaded, action)) {
        console.log(action.workout)
        return {
            ...previousState,
            workout: action.workout,
        }
    }
    return previousState
}
