import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {WorkoutTable, WorkoutTableDispatchProps, WorkoutTableProps} from "../presentation/WorkoutTable";
import {AppState} from "../model/AppState";

export const mapStateToProps: MapStateToProps<WorkoutTableProps, void, AppState> = state => ({
    workout: state.workout,
})

export const mapDispatchToProps: MapDispatchToProps<WorkoutTableDispatchProps, void> = dispatch => ({
})

export const WorkoutContainer = connect(mapStateToProps, mapDispatchToProps)(WorkoutTable)
