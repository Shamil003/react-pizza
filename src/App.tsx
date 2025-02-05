import {Route, Routes} from "react-router-dom";
import React from 'react';

import Home from './pages/Home';

import './scss/app.scss';
import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart" */ './pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza" */'pages/FullPizza'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */'pages/NotFound'))

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route path='' element={<Home />}/>
                <Route path='/cart' element={
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                    <Cart/>
                </React.Suspense>}/>
                <Route path='/pizza/:id' element={
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                        <FullPizza/>
                    </React.Suspense>
                }/>
                <Route path='*' element={
                    <React.Suspense fallback={<div>Загрузка...</div>}>
                        <NotFound/>
                    </React.Suspense>
                }/>
            </Route>ss
        </Routes>
    </>
  )
}
export default App;