import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './app/router/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const client = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>
    <RouterProvider router={router} />
  </QueryClientProvider>
)
