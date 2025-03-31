import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/List'


export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (builder) => ({
        getUsers: builder.query<IUser[], void>({
            query: () => 'users',
        }),
        getUserById: builder.query<IUser, string>({
            query: (id) => `users/${id}`
        })
    })
})

export const {useGetUsersQuery, useGetUserByIdQuery} = api;
