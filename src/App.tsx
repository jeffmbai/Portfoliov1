import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ThemeProvider"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import ResumePage from "./pages/ResumePage"

function App() {
  return (
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
        <div className="min-h-screen bg-black text-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
