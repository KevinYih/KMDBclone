import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("first isAuthenticated:", isAuthenticated);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={isAuthenticated ? <HomePage /> : <Navigate to="/" />} />
          <Route path="/:mediaType/:id" element={isAuthenticated ? <MovieDetailPage /> : <Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
