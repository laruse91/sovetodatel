// import { BaseQueryFn } from '@reduxjs/toolkit/query/react'
// import { createChannel, createClient, MethodDefinition } from 'nice-grpc-web'
// import { Client } from 'nice-grpc-web/src/client/Client.ts'
// import { CompatServiceDefinition } from 'nice-grpc-web/src/service-definitions'
// import { Message } from 'protobufjs'
// import { BimMLServerConnectionClient, BimMLServerConnectionDefinition } from 'src/_proto/proto/IMPulseMLServer.ts'
//
// type Result = {
//   error?: GrpcBaseQueryError
//   data?: Message | Message[]
// }
//
// export interface GrpcArgs {
//   method: string
// }
//
// export type GrpcBaseQueryArgs = {
//   host: string
//   definition: Client<CompatServiceDefinition>
// }
//
// export type GrpcBaseQueryError = {
//   code: grpc.Code // GRPC status code
//   message: string
// }
//
// /**
//  * This is a very small wrapper around grpc-web that aims to simplify requests.
//  * {@link [grpc-web](https://github.com/improbable-eng/grpc-web)}.
//  *
//  * @example
//  * ```ts
//  * const baseQuery = fetchBaseQuery({
//  *   host: 'https://api.your-really-great-app.com/v1/',
//  * })
//  * ```
//  *
//  * @param {string} host
//  * The host for an grpc-web proxy.
//  * Typically in the format of http://example.com/
//  *
//  */
// // export const baseQuery = ({ host, metadata }: GrpcBaseQueryArgs): BaseQueryFn<GrpcArgs, unknown, GrpcBaseQueryError> => {
// //   if (typeof invoke === 'undefined' || typeof host === 'undefined') {
// //     console.warn(
// //       'Warning: `grpc invoke` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments.'
// //     )
// //   }
// //
// //   return async ({ method, request }) => {
// //     const response = await new Promise((resolve, reject) => {
// //       const result: Result = {}
// //
// //       invoke(method, {
// //         request,
// //         host,
// //         metadata,
// //         onMessage: (message: Message) => {
// //           method.responseStream ? (result.data as Message[]).push(message) : result.data = message
// //         },
// //         onEnd: (code: grpc.Code, message: string | undefined) => {
// //           if (code === grpc.Code.OK) {
// //             resolve(result)
// //           } else {
// //             reject({ code, message })
// //           }
// //         }
// //       })
// //     }).catch((error) => {
// //       return {
// //         error
// //       } as Result
// //     })
// //
// //     const { error, data } = response as Result
// //     return (error) ? { error: error } : { data: data }
// //   }
// // }
//
// export const baseQuery = ({ host, definition }: GrpcBaseQueryArgs): BaseQueryFn<GrpcArgs, unknown, GrpcBaseQueryError> => {
//
//   return async ({ method }) => {
//     const response = await new Promise((resolve, reject) => {
//       const result: Result = {}
//
//       const client: BimMLServerConnectionClient = createClient(definition, createChannel(host))
//
//         client[method].then((result)=>result.data.push(result)).catch((error) => {
//           return {
//             error
//           } as Result
//         })
//
//       // invoke(method, {
//       //   request,
//       //   host,
//       //   metadata,
//       //   onMessage: (message: Message) => {
//       //     method.responseStream ? (result.data as Message[]).push(message) : result.data = message
//       //   },
//       //   onEnd: (code: grpc.Code, message: string | undefined) => {
//       //     if (code === grpc.Code.OK) {
//       //       resolve(result)
//       //     } else {
//       //       reject({ code, message })
//       //     }
//       //   }
//       // })
//     }).catch((error) => {
//       return {
//         error
//       } as Result
//     })
//
//     const { error, data } = response as Result
//     return (error) ? { error: error } : { data: data }
//   }
// }
