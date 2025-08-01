import { BrowserRouter, Route, Routes } from "react-router"
import { ThemeProvider } from "./shared/hooks/useTheme"
import { Home } from "./pages/home"
import { Teste } from "./pages/auth"
import AdminPage from "./pages/admin"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teste" element={<Teste />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}
