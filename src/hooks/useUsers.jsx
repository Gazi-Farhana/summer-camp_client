import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: users = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure(`/users?email=${user?.email}`);
      return res.data;
    },
  });

  return { refetch, loading, users };
};

export default useUser;
