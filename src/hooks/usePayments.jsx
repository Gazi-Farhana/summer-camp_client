import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const usePayments = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();

    const {
        data: payments = [],
        isLoading: loading,
        refetch,
      } = useQuery({
        queryKey: ["payments", user?.email],
        queryFn: async () => {
            if(!user){
              return false
            }
            const res = await axiosSecure(`/payments?email=${user?.email}`);
            return res.data;
        },
      });
    
      return { payments, loading, refetch };
};

export default usePayments;