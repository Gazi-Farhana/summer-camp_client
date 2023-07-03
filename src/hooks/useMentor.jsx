import { useQuery } from "@tanstack/react-query";
import useAuth from './useAuth'
import useAxiosSecure from './useAxiosSecure'


const useMentor = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  

  const { data: isMentor, isLoading: isMentorLoading } = useQuery({
    queryKey: ["isMentor", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if(!user){
        return false
      }
      const res = await axiosSecure.get(`/users/mentor/${user?.email}`);
      return res.data.admin;
    },
  });
  return [isMentor, isMentorLoading];
};

export default useMentor;