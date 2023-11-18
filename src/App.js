import React, { Suspense, lazy } from "react";
import { Route, Routes, Link } from 'react-router-dom';
import Navbar from "./components/Navbar";
import {Box} from "@mui/material";

const Home = lazy(() => import("./page-components/home/Home"));
const Editor = lazy(() => import("./page-components/editor/Editor"));


function App() {
  return (
      <>
          <Box pt={8}>
              <Navbar />
              <Suspense
                  fallback={
                      <div>Loading ... </div>
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
