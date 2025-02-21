import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingScreen from "../../components/website-loading";

const AuthPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/auth/login", { replace: true });
  }, [navigate]);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <LoadingScreen />
    </div>
  );
};

export default AuthPage;
