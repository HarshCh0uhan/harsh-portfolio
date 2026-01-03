import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Terminal from './components/Terminal.jsx'
import Background from './components/Background.jsx'


function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Background />} />
          {/* <Route path="/" element={<Terminal />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
