import { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/userSlice";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  const dispatch = useDispatch();

  const handeSumbit = (e) => {
    e.preventDefault();

    const newData = {
      name,
      surname,
      age,
    };

    dispatch(addUsers(newData));

    setData([...data, newData]);

    setAge("");
    setName("");
    setSurname("");
  };

  console.log(data);

  return (
    <div className="form-wrapper">
      <h2>Foydalanuvchi Malumotlari</h2>
      <form onSubmit={handeSumbit}>
        <div className="form-group">
          <label htmlFor="name">Ismingiz</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Ismingizni kiriting"
          />
        </div>
        <div className="form-group">
          <label htmlFor="surname">Familiyangiz</label>
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            id="surname"
            placeholder="Familiyangizni kiriting"
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Yoshingiz</label>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            type="number"
            id="age"
            placeholder="Yoshingizni kiriting"
          />
        </div>
        <button>Send</button>
      </form>
    </div>
  );
};

export default CreateUser;
