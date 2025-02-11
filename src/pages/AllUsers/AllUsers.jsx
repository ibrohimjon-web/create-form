import { useDispatch, useSelector } from "react-redux";
import { removeUsers } from "../../redux/userSlice";
import "./AllUsers.css";

const AllUsers = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeUsers({ id }));
  };

  const handleAllDelete = () => {
    users.forEach((user) => dispatch(removeUsers({ id: user.id })));
  };

  return (
    <div className="all-users">
      {users.map((item, index) => (
        <div className="card" key={index}>
          {item.gender === "male" ? (
            <img
              src="https://cdn-icons-png.flaticon.com/512/4042/4042171.png"
              alt="Male"
            />
          ) : item.gender === "female" ? (
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSolRKPe8MBBjPvb5j8aLsbk3fAhE3c9nKHEw&s"
              alt="Female"
            />
          ) : (
            <img
              src="https://t4.ftcdn.net/jpg/02/89/59/55/360_F_289595573_wCKO1nxxx7HGk69z5szjvSOqPnZVTfTG.jpg"
              alt="Other"
            />
          )}

          <h2>{item.name}</h2>
          <h2>{item.surname}</h2>
          <h2>{item.age}</h2>
          <button anClick={() => dispatch(removeUser(item))}>Delete</button>
        </div>
      ))}
      <div className="all-delete-btn-wrapper">
        <button
          className="all-delete-btn"
          onClick={() => handleDelete(item.id)}
        >
          All Delete
        </button>
      </div>
    </div>
  );
};

export default AllUsers;
