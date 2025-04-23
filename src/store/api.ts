import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
	DELETE_ALL_PRODUCT,
	DELETE_PRODUCT,
	GET_PRODUCT_IN_CART,
	INCREASE_PRODUCT,
	POST_PRODUCT_IN_CART,
	REDUCE_PRODUCT,
} from './typs'

const apiUrl = `https://store-api.softclub.tj/`

export const productsApi = createApi({
	reducerPath: 'productsApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://store-api.softclub.tj',
		prepareHeaders: headers => {
			const access_token = localStorage.getItem('access_token')

			if (access_token) {
				headers.set('Authorization', `Bearer ${access_token}`)
			}

			return headers
		},
	}),
	tagTypes: ['Cart'],
	endpoints: builder => ({
		getProducts: builder.query<any[], void>({
			query: () => 'Product/get-products',
			transformResponse: (response: any) => {
				return response.data.products
			},
		}),
		getCategory: builder.query<any[], void>({
			query: () => 'Category/get-categories',
			transformResponse: (response: any) => {
				console.log(response.data)
				return response.data
			},
		}),
		getbyIdproduct: builder.query<any[], string>({
			query: (id: string) => `Product/get-product-by-id?id=${id}`,
			transformResponse: (response: any) => {
				return response.data
			},
		}),
		getBrands: builder.query<any[], void>({
			query: () => 'Brand/get-brands',
			transformResponse: (response: any) => {
				return response.data
			},
		}),
		postCard: builder.mutation<any, string>({
			query: id => ({
				url: `Cart/add-product-to-cart?id=${id}`,
				method: 'POST',
			}),
			transformResponse: (response: any) => response.data,
		}),
		getCartProducts: builder.query({
			query: () => `${GET_PRODUCT_IN_CART}`,
			providesTags: ['Cart'],
		}),
		increaseProduct: builder.mutation({
			query: productId => ({
				url: `${INCREASE_PRODUCT}${productId}`,
				method: 'PUT',
			}),
			invalidatesTags: ['Cart'],
		}),
		reduceProduct: builder.mutation({
			query: productId => ({
				url: `${REDUCE_PRODUCT}${productId}`,
				method: 'PUT',
			}),
			invalidatesTags: ['Cart'],
		}),
		deleteProduct: builder.mutation({
			query: productId => ({
				url: `${DELETE_PRODUCT}${productId}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Cart'],
		}),
		deleteAllProduct: builder.mutation({
			query: () => ({
				url: `${DELETE_ALL_PRODUCT}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Cart'],
		}),
		postProductInCart: builder.mutation({
			query: productId => ({
				url: `${POST_PRODUCT_IN_CART}${productId}`,
				method: 'POST',
			}),
			invalidatesTags: ['Cart'],
		}),
	}),
})

export const {
	useGetProductsQuery,
	useGetCategoryQuery,
	useGetbyIdproductQuery,
	useGetBrandsQuery,
	usePostCardMutation,
	useGetCartProductsQuery,
	useIncreaseProductMutation,
	useReduceProductMutation,
	useDeleteProductMutation,
	useDeleteAllProductMutation
} = productsApi
