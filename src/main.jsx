import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Posts from './Routes/Posts.jsx'
import NewPost from './Routes/NewPost.jsx';
import RootLayout from './Routes/RootLayout.jsx';

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <RootLayout />, 
    children: [
      { 
        path: '', 
        element: <Posts />, 
        children: [
          { path: 'created-posts', element: <NewPost /> }
        ]
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
