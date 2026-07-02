import { Navigate } from "react-router-dom"; // Corrected import for react-router-dom
import { useAuth } from "../context/useAuth"; // Updated import path

// Removed TypeScript type annotation
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) return null; // Or a loading spinner
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};