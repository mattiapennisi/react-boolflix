import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { DefaultProvider } from './contexts/DefaultContext.jsx';

import DefaultLayout from './layouts/DefaultLayout.jsx'

import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {

  return (
    <>
      <DefaultProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<HomePage />} />
              <Route path='*' element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DefaultProvider>
    </>
  )
}

export default App