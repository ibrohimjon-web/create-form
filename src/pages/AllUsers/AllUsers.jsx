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
          <h2>{item.name}</h2>
          <h2>{item.surname}</h2>
          <h2>{item.age}</h2>
          <button onClick={() => handleDelete(item.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
      <div className="all-delete-btn-wrapper">
        <button className="all-delete-btn" onClick={handleAllDelete}>
          All Delete
        </button>
      </div>
    </div>
  );
};

export default AllUsers;
