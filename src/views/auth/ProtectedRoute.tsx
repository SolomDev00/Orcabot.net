import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";

interface IProps {
  isAllowed: boolean;
  redirectPath: string;
  children: ReactNode;
}

// interface AuthenticatedRouteProps {
//   children: ReactNode;
//   allowedRoles?: string[];
// }

const ProtectedRoute = ({ isAllowed, redirectPath, children }: IProps) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  return <>{children}</>;
};

export const AuthenticatedRoute = ({
  children,
  allowedRoles,
}: {
  children: ReactNode;
  allowedRoles?: string[];
}) => {
  const cookies = new Cookies();
  const token = cookies.get("userLoggedCIT");

  const isLoggedIn = !!token?.token;
  const businessId = token?.user?.business_id; 

  
  if (!isLoggedIn) {
    return <Navigate to="/auth/login" replace />;
  }

  const userType = businessId ? "company" : "individual";

  if (allowedRoles && !allowedRoles.includes(userType)) {
    return <Navigate to="/403" replace />;
  }

  return <>{children}</>;
};


export const GuestRoute = ({ children }: { children: ReactNode }) => {
  const cookies = new Cookies();
  const token = cookies.get("userLoggedCIT");
  const isLoggedIn = !!token?.token;

  return (
    <ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/">
      {children}
    </ProtectedRoute>
  );
};

export default ProtectedRoute;