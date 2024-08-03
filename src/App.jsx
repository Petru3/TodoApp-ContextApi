import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importing the pages for this application
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import NotFound from './pages/NotFound'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

