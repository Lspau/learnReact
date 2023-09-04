import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Login, Public } from './containers/public';
import path from './ultis/path';
import { useEffect } from 'react';
import * as action from './store/actions';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() =>{
    dispatch(action.getHome());
  },[])


  return (
    <>
      <div className="">
        <Routes>
            <Route path={path.PUBLIC} element={<Public/>}>
                <Route path={path.HOME} element={<Home/>}/>
                <Route path={path.LOGIN} element={<Login/>}/>


                <Route path={path.STAR} element={<Home/>}/>
            </Route>
        </Routes>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
