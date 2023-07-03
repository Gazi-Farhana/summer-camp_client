import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCard = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["cart", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if(!user){
        return false
      }
      const res = await axiosSecure(`/cart?email=${user?.email}`);
      return res.data;
    },
  });

  return {cart, refetch};
};

export default useCard;
