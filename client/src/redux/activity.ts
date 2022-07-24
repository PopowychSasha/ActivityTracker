import {createSlice} from '@reduxjs/toolkit';
import { IActivity } from '../types/IActivity';

const initialState : IActivity[] = [];

export const activitySlice = createSlice({
    name:'activity',
    initialState,
    reducers:{
        addActivity(state,action){
            return [action.payload,...state];
        },
        fetchActivity(state,action){
            return [...action.payload];
        }
    }
})

export const activityActions = activitySlice.actions;