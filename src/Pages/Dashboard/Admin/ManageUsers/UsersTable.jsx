import Swal from "sweetalert2";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UsersTable = ({ index, userActive, refetch }) => {
  const { email, name, image, role, _id } = userActive;
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();

  const handlePromote = (role) => {
    axiosSecure
      .put(`/users/${_id}?email=${user.email}&role=${role}`)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User Promoted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        refetch();
      });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>{role ? role : "student"}</td>
      <th>
        {role == "mentor" ? (
          <button className="btn btn-info btn-xs" disabled>
            mentor
          </button>
        ) : (
          <button
            onClick={() => handlePromote("mentor")}
            className="btn btn-info btn-xs"
          >
            mentor
          </button>
        )}
      </th>
      <th>
        {role == "admin" ? (
          <button className="btn btn-info btn-xs" disabled>
            admin
          </button>
        ) : (
          <button
            onClick={() => handlePromote("admin")}
            className="btn btn-success btn-xs"
          >
            admin
          </button>
        )}
      </th>
    </tr>
  );
};

export default UsersTable;
