import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from './componant/Main';
import Home from './componant/Home';
import Login from './componant/Login';
import Register from './componant/Register';
import Pivate from './componant/Pivate';
import Orders from './componant/Orders';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/home', element: <Home></Home> },
        { path: '/orders', element: <Pivate><Orders></Orders></Pivate> },
        { path: '/login', element: <Login></Login> },
        { path: '/register', element: <Register></Register> }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
