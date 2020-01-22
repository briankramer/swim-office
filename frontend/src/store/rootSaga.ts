import {call, put, all} from "redux-saga/effects"
import {retrieveWorkout} from "./repository";
import {workoutLoaded} from "../actions/workoutLoaded";
import {Workout} from "../model/Workout";

export default function* rootSaga() {
    yield all([
        loadWorkoutSaga(),
    ])
}

export function* loadWorkoutSaga() {
    const workout: Workout = yield call(retrieveWorkout)
    console.log(workout)
    yield put(workoutLoaded({workout}))
    // yield put(workoutLoaded({
    //     [{
    //         session: workout.session,
    //     }]
    // }))
}
