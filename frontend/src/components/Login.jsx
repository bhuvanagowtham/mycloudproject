import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post(
        "http://65.1.1.33/api/auth/authenticate",
        formData
      );
      console.log(response.data);
      localStorage.setItem("token", response.data);
      navigate("/users");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
