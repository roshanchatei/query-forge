import React, { Suspense, lazy } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import {Box} from "@mui/material";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const Editor = lazy(() => import("./pages/Editor"));


function App() {
  return (
      <>
          <Box pt={8}>
              <Navbar />
              <Suspense
                  fallback={
                      <Loader />
                  }
              >
                  <Routes>
                      <Route path='/' element={<Home />} />
                      <Route path='/editor' element={<Editor />} />
                  </Routes>
              </Suspense>
          </Box>


      </>
  );
}

export default App;
