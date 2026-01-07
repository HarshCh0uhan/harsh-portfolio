import { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Terminal from './components/Terminal.jsx'
import Background from './components/Background.jsx'
import { Provider } from 'react-redux'
import store from './utils/store.js'


function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Background />} />
            {/* <Route path="/" element={<Terminal />} /> */}
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
