import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCourses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const {
    data: courses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["courses/all"],
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure(`/courses/uncensored?email=${user?.email}`);
      return res.data;
    },
  });

  return { courses, loading, refetch };
};

export default useCourses;
