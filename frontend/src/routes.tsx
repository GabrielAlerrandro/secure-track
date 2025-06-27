import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "./shared/hooks/useTheme"
import { Home } from "./pages/home/home"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
