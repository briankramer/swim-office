import axios from "axios"
import {Workout} from "../model/Workout"

export const retrieveWorkout = () => {
    return axios.get<Workout>("http://localhost:5000/api/practice/all")
        .then(response => {return {reps: response.data}})
}
