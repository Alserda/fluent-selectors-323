import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
import { IAction, ActionType } from 'data/actions';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

/* Reducers */
import { ILocaleState, localeReducer } from 'data/locale/localeReducer';

/* Redux saga */
import sagas from 'data/sagas';


const sagaMiddleware = createSagaMiddleware();

// Transform action types to be logged as strings instead of enum numbers.
const logger = createLogger({
  actionTransformer: (action: any): any => typeof action.type === 'number' && ActionType[action.type] ? ({
    type: ActionType[action.type],
    payload: action.payload,
  }) : action
});


export interface IRootState {
  locale: ILocaleState;
}

export const store: Store<IRootState> = createStore<IRootState, IAction<any>, any, any>(
  combineReducers({
    locale: localeReducer,
  }),
  applyMiddleware(
    sagaMiddleware,
    logger,
  )
);

sagaMiddleware.run(sagas);
