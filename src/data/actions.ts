export interface IAction<T> {
  type: ActionType;
  payload: T;
}

export interface IPureAction<T, P> {
  type: T;
  payload: P;
}

export enum ActionType {
  /* Miscellaneous */
  SET_OPERATING_MODE,

  /* Connection */
  UPDATE_CONNECTION_STATUS,

  /* Sequence */
  SEQUENCE_STATUS,

  /* Operations */
  SET_OPERATIONS,
  OPERATION_STATUS,
  OPERATION_RESULT,
  OPERATION_UPDATE,

  /* Settings */
  UPDATE_SETTINGS,

  /* Orders */
  ORDER_STARTED,
  ORDER_UPDATE,
  SERIAL_NUMBER_GENERATED,

  /* Aid */
  AID_REQUESTED,
  AID_CONCLUDED,

  /* Locale */
  CHANGE_LOCALES_REQUEST,
  CHANGE_LOCALES_RESPONSE,
  NO_LOCALES_AVAILABLE,
}