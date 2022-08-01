import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { VoidResponse } from '../../utils/types/services/common';
import {
  AddExpenseCategoryRequest,
  AddExpenseItemRequest,
  GetActivityResponse,
  GetExpensesNamesResponse,
  GetAllExpensesRequest,
  GetAllExpensesResponse,
  GetExpenseStatisticRequest,
  GetExpenseStatisticResponse,
  GetExpensesByCategoryResponse,
  GetExpensesByCategoryRequest,
  GetTransactionsHistoryResponse,
  AddIncomeRequest,
  GetChartDataResponse,
  GetChartDataRequest
} from '../../utils/types/services/expenses';

const expensesService = createApi({
  reducerPath: 'api/expense',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/expense/`
  }),
  tagTypes: ['expenses', 'categories'],
  endpoints: (build) => ({
    /**
     * Add expense with its description, amount and quantity
     */
    addExpenseItem: build.mutation<VoidResponse, AddExpenseItemRequest>({
      query: (data) => ({
        url: 'add-item',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['expenses']
    }),

    /**
     * Add income with its amount per date
     */
    addIncome: build.mutation<null, AddIncomeRequest>({
      query: (data) => ({
        url: 'add-income',
        method: 'POST',
        body: data
      })
    }),

    /**
     * Add category to add expenses to
     */
    addExpenseCategory: build.mutation<VoidResponse, AddExpenseCategoryRequest>(
      {
        query: (data) => ({
          url: 'add-category',
          method: 'POST',
          body: data
        }),
        invalidatesTags: ['categories']
      }
    ),

    /**
     * Get expenses by all categories
     */
    getExpensesAllCategories: build.query<
      GetAllExpensesResponse,
      GetAllExpensesRequest
    >({
      query: (data) => ({
        url: 'all',
        method: 'GET',
        body: data
      }),
      providesTags: ['categories']
    }),

    /**
     * Get all expenses by one category
     */
    getExpensesByCategory: build.query<
      GetExpensesByCategoryResponse,
      GetExpensesByCategoryRequest
    >({
      query: ({ category, userId }) => ({
        url: `by-category/${userId}/${category}`
      }),
      providesTags: ['expenses']
    }),

    /**
     * Get all categories names with ids
     */
    getExpensesItemsNames: build.query<GetExpensesNamesResponse, string>({
      query: (userId) => ({
        url: `get-names/${userId}`
      })
    }),

    /**
     * Get dashboard statistic data
     */
    getExpenseStatistic: build.query<GetExpenseStatisticResponse, string>({
      query: (userId) => ({
        url: `statistics/${userId}`
      })
    }),

    /**
     * Get percentage of top-5 expenses categories
     */
    getActivityData: build.query<GetActivityResponse, string>({
      query: (userId) => ({
        url: `activities/${userId}`
      })
    }),

    /**
     * Get transactions history
     */
    getTransactions: build.query<GetTransactionsHistoryResponse, string>({
      query: (userId) => ({
        url: `last-transactions/${userId}`
      })
    }),

    /**
     * Get chart data
     */
    getChartData: build.query<GetChartDataResponse, GetChartDataRequest>({
      query: ({ userId, filter }) => ({
        url: `chart-data?userId=${userId}&filter=${filter}`
      })
    })
  })
});

export const {
  useAddExpenseCategoryMutation,
  useAddExpenseItemMutation,
  useAddIncomeMutation,

  useGetActivityDataQuery,
  useGetExpensesAllCategoriesQuery,
  useGetExpensesByCategoryQuery,
  useLazyGetExpensesItemsNamesQuery,
  useGetExpenseStatisticQuery,
  useGetTransactionsQuery,
  useGetChartDataQuery
} = expensesService;

export default expensesService;
