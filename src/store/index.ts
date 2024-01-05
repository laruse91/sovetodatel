import { configureStore } from '@reduxjs/toolkit'
import { errorHandlerMiddleware } from './errorHandlerMiddleware'
// import { authApi } from '../api/authApi.ts'

export default configureStore({
  reducer: {
    // [authApi.reducerPath]: authApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      // authApi.middleware,
      errorHandlerMiddleware
    )
  },
  // devTools: __IS_DEV
})
