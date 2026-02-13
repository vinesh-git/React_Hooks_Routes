import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFount from './pages/NotFount';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import TodoDetails from './pages/TodoDetails';
import MainLayout from './layout/MainLayout';
import Login from './pages/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='products' element={<Products />} />
            <Route path='productdetails/:id' element={<ProductDetails />} />
            <Route path='todo/:id' element={<TodoDetails />} />
            <Route path='dashboard' element={<Dashboard />} />
          </Route>
          <Route path='*' element={<NotFount />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
