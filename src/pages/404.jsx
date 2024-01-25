import React from 'react';
import Footer from '../components/Fragments/Footer';
import Navbar from '../components/Fragments/Navbar';
// import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
//   const error = useRouteError();
  
  // Memastikan bahwa error tidak null sebelum mencoba mengakses properti statusText
//   const errorMessage = error ? error.statusText || error.message : 'Unknown Error';

  return (
    <>
    <Navbar/>
    <div className="wrap-404">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="sub-404">Halaman Tidak Ditemukan</p>
      <p>Maaf, halaman tidak ditemukan</p>
      <Footer />
    </div>
    </>
  );
};

export default ErrorPage;
