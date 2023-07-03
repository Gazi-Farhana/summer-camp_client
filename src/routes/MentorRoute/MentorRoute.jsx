import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useMentor from "../../hooks/useMentor";

const MentorRoute = ({children}) => {
  const [isMentor, isMentorLoading] = useMentor();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isMentorLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isMentor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default MentorRoute;
