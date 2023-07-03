import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useEnrolled = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure(`/cart/enrolled?email=${user?.email}`);
      return res.data;
    },
  });

  return { cart, refetch };
};

export default useEnrolled;
