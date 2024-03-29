import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../features/auth/auth-slice';
import modularItemReducer from '../features/customize/modular-item/modularItemSlice';
import boardReducer from '../features/customize/board-grid/boardSlice';
import customizeReducer from '../features/customize-form/customize-form-slice';
import cardListReducer from '../features/card-list/card-list-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    modularItem: modularItemReducer,
    board: boardReducer,
    customize: customizeReducer,
    cardList: cardListReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['form/postNewLogin/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg'],
        // Ignore these paths in the state
        ignoredPaths: ['login'],
      },
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
