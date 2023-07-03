import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const useMentorClass = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const { refetch, data: courses = [] } = useQuery({
    queryKey: ["courses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      if (!user) {
        return false;
      }
      const res = await axiosSecure(`/courses/my-courses?email=${user?.email}`);
      return res.data;
    },
  });

  return { courses, refetch };
};

export default useMentorClass;
