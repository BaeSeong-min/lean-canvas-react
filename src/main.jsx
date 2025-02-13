import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import CanvasDetail from './pages/CanvasDetail';

const router = createBrowserRouter([
  // 배열에 경로에 대한 정보를 넣는다.
  {
    path: '/', // 어떠한 경로에서 (루트 경로)
    element: <App />, // 어떠한 컴포넌트 즉, UI를 보여준다.
    children: [
      // children으로 설정된 컴포넌트가 루트 컴포넌트의 Outlet 컴포넌트 위치에 렌더링된다.
      {
        path: '', // 상위 라우트의 path와 이어진다.
        element: <Home />,
      },
      {
        path: 'about', // 상위 라우트의 path와 이어진다.
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'canvases/:id',
        element: <CanvasDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
