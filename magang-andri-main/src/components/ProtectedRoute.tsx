import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  isAdmin?: boolean; // Add this prop to check if the route requires admin access
}

const ProtectedRoute = ({ children, isAdmin = false }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token');
  const isAuthenticated = !!token;

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Decode the token to check the user's role
  if (isAuthenticated && token) {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
      const userRole = decodedToken.role;

      // If the route requires admin access and the user is not an admin, redirect to forbidden
      if (isAdmin && userRole !== 'admin') {
        return <Navigate to="/forbidden" replace />;
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      return <Navigate to="/" replace />; // Redirect to login if token is invalid
    }
  }

  // If all checks pass, render the children (protected content)
  return <>{children}</>;
};

export default ProtectedRoute;