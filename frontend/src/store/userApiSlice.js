import { apiSlice } from './apiSlice'
import { USERS_URL } from '../constants'

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: builder => ({
		login: builder.mutation({
			query: data => ({
				url: `${USERS_URL}/login`,
				method: 'POST',
				body: data
			}),
			keepUnusedDataFor: 5
		}),
		logout: builder.mutation({
			query: data => ({
				url: `${USERS_URL}/logout`,
				method: 'POST'
			}),
			keepUnusedDataFor: 5
		})
	})
})

export const { useLoginMutation, useLogoutMutation } = usersApiSlice
