import { isRejectedWithValue, Middleware, SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

type Action = {
  error: { message: string }
  payload: FetchBaseQueryError | SerializedError
  type: string
}

export const errorHandlerMiddleware: Middleware = () => (next) => async (action: Action) => {
  // RTK Query createAsyncThunk
  if (isRejectedWithValue(action)) {
    const meta = action.meta.arg as { endpointName: string };
    console.error({ endpoint: meta?.endpointName, ...action.payload });
  }

  return next(action);
};
