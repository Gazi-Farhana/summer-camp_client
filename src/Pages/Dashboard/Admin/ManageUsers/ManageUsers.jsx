import SectionTitle from "../../../../Components/SocialSignIn/SectionTitle";
import useUser from "../../../../hooks/useUsers";
import UsersTable from "./UsersTable";

const ManageUsers = () => {
  const { refetch, loading, users } = useUser();

  return (
    <div>
<SectionTitle title="Manage Courses"/>
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Promote to Instructor</th>
            <th>Promote to Admin</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,index)=><UsersTable key={user._id} index={index} userActive={user} refetch={refetch}/>)}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default ManageUsers;
