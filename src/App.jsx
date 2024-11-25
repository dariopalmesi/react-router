import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import AppMain from './components/AppMain.jsx'
import Home from './pages/Home.jsx'
import Postlist from './pages/PostList.jsx'
import ChiSiamo from './pages/ChiSiamo.jsx'
import DefaultLayout from './components/DefaultLayout.jsx'
import './App.css'





function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path='/posts' element={<AppMain />} />
            <Route path='/chisiamo' element={<ChiSiamo />} />
          </Route>
        </Routes>

      </BrowserRouter>






      {/* <AppHeader />
      
      <AppFooter /> */}
    </>
  )
}

export default App
