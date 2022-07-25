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
  AddIncomeRequest
} from '../../utils/types/services/expenses';

const expensesService = createApi({
  reducerPath: 'api/expenses',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/expenses/`
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
        url: 'get-all-expenses',
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
      query: (data) => ({
        url: 'get-expenses-category',
        body: data
      }),
      providesTags: ['expenses']
    }),

    /**
     * Get all categories names with ids
     */
    getExpensesItemsNames: build.query<GetExpensesNamesResponse, null>({
      query: () => ({
        url: 'get-names'
      })
    }),

    /**
     * Get dashboard statistic data
     */
    getExpenseStatistic: build.query<
      GetExpenseStatisticResponse,
      GetExpenseStatisticRequest
    >({
      query: (data) => ({
        url: 'get-statistic',
        body: data
      })
    }),

    /**
     * Get percentage of top-5 expenses categories
     */
    getActivityData: build.query<GetActivityResponse, null>({
      query: () => ({
        url: 'get-activity'
      })
    }),

    /**
     * Get transactions history
     */
    getTransactions: build.query<GetTransactionsHistoryResponse, null>({
      query: () => ({
        url: 'get-transactions'
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
  useGetExpensesItemsNamesQuery,
  useGetExpenseStatisticQuery,
  useGetTransactionsQuery
} = expensesService;

export default expensesService;
