import { QueryClient, type QueryFunctionContext } from '@tanstack/react-query'
import { apiClient } from './api/client'

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext) => {
  const [path, params] = queryKey as [string, Record<string, unknown>?]

  if (typeof path !== 'string') {
    throw new Error('Query key must start with a string path.')
  }

  const response = await apiClient.get(path, { params })
  return response.data
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60 * 5,
      retry: 2,
      refetchOnWindowFocus: false
    }
  }
})
