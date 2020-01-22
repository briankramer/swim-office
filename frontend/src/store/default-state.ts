import {AppState} from "../model/AppState"

export const DEFAULT_STATE: AppState = {
    workout: {
        reps: [{
            reps: 0,
            distance: 0,
            interval: 0,
            intensity: "",
            session: 0,
            grouping: 0
        }]
    }
}
