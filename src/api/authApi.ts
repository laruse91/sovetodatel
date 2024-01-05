// import { createApi } from '@reduxjs/toolkit/query/react'
// import { BimMLServerConnectionDefinition } from 'src/_proto/proto/IMPulseMLServer.ts'
// import { AuthenticationRequest, AuthenticationResponse } from '../proto/IMPulseMLServer_pb.d'
// import { BimMLServerConnectionClient } from '../proto/IMPulseMLServerServiceClientPb.ts'
// import { baseQuery } from './rtk-query-config.ts'
//
// const HOST = 'Dev.grpc-app.im-pulse.ai' || 'http://localhost:8080'
//
// export const authApi = createApi({
//   baseQuery: baseQuery({ host: HOST, definition: BimMLServerConnectionDefinition }),
//   reducerPath: 'authQuery',
//   tagTypes: [],
//   endpoints: ({ mutation, query }) => ({
//
//     login: mutation<AuthenticationResponse, AuthenticationRequest>({
//     query: (body) => {
//       return {
//         method: BimMLServerConnectionDefinition.methods.authenticate,
//         // request: AuthenticationRequest.decode(),
//       }
//     },
//     transformResponse: (server: AuthenticationResponse) => server
//     })
//   })
// })
//
// export const { useLoginMutation } = authApi
