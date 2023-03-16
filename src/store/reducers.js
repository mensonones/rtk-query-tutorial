import { combineReducers } from '@reduxjs/toolkit';

import { reducer as jediOrderApiReducer } from '../services/api';

const reducers = combineReducers({
    jediOrderApi: jediOrderApiReducer,
});

export default reducers;