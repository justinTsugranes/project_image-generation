import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

import { logo } from './assets'
import { CreatePost, Home } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto max-w-7xl">
        <header className="flex w-full items-center justify-between border-b border-b-[#e6ebf4] bg-white px-4 py-4 sm:px-8">
          <Link to="/">
            <img src={logo} alt="logo" className="w-28 object-contain" />
          </Link>
          <Link
            to="/create-post"
            className="rounded-md bg-[#6469ff] px-4 py-2 font-inter font-medium text-white"
          >
            Create
          </Link>
        </header>
      </div>
      <main className="min-h-[calc(100vh-73px)] w-full bg-[#f9fafe] px-4 py-8 sm:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
