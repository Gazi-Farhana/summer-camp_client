import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "2px solid",
  boxShadow: 24,
  p: 4,
};

const ManageCourseTable = ({ course, index, refetch }) => {
  const [axiosSecure] = useAxiosSecure();
  const [feedback, setFeedBack] = useState(null);
  const { user } = useAuth();

  const {
    course_title,
    course_img,
    mentor_name,
    mentor_img,
    available_seats,
    price,
    enrolled,
    status,
    mentor_email,
    _id,
  } = course;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmitFeedback = () => {
    axiosSecure
      .put(`/courses/feedback/${_id}?email=${user.email}`, {
        feedback: feedback,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Feedback is send",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        refetch();
      });
  };

  const handleStatusChange = (currentStatus) => {
    axiosSecure
      .put(`/courses/status/${_id}?email=${user.email}`, {
        status: currentStatus,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "New status updated",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        refetch();
      });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={course_img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{course_title}</div>
            </div>
          </div>
        </td>
        <td>
          {mentor_name}
          <br />
          <span className="badge badge-ghost badge-sm">{mentor_email}</span>
        </td>
        <td>
          {status == "approved" ? (
            <span className="text-green-600">{status}</span>
          ) : status == "pending" ? (
            <span className="text-blue-600">{status}</span>
          ) : (
            <span className="text-red-600">{status}</span>
          )}
        </td>
        <th>
          {status == "approved" ? (
            <button className="btn btn-error btn-xs" disabled>
              Approved
            </button>
          ) : (
            <button
              onClick={() => handleStatusChange("approved")}
              className="btn btn-success btn-xs"
            >
              Approved
            </button>
          )}
        </th>
        <th>
          {status == "denied" ? (
            <button className="btn btn-error btn-xs" disabled>
              Denied
            </button>
          ) : (
            <button
              onClick={() => handleStatusChange("denied")}
              className="btn btn-error btn-xs"
            >
              denied
            </button>
          )}
        </th>
        <th>
          <Button onClick={handleOpen}>Feedback</Button>
        </th>
      </tr>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You feedback
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <textarea
              onBlur={(event) => setFeedBack(event.target.value)}
              className="textarea textarea-bordered w-96"
              placeholder="Bio"
            ></textarea>
            <button onClick={handleSubmitFeedback} className="btn btn-primary">
              Submit
            </button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ManageCourseTable;
