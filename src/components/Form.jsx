import { useState } from "react";

export default function () {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    favoriteColor: "red",
    sex: "",
  });
  const [message, setMessage] = useState("");
  const text = () => `Thank you for signing up!`;
  const compiledForm = { ...formData };

  return (
    <>
      <h3>Exercise 2</h3>
      <div>
        <label>
          Email
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((f) => ({ ...f, email: e.target.value }))
            }
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((f) => ({ ...f, password: e.target.value }))
            }
          />
        </label>
      </div>
      <div>
        <span>Favorite color: </span>
        <select
          value={formData.favoriteColor}
          onChange={(e) =>
            setFormData((f) => ({ ...f, favoriteColor: e.target.value }))
          }
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>
      <div>
        <label>
          Sex:
          <label>
            <input
              type="radio"
              name="sex"
              value="M"
              onChange={(e) =>
                setFormData((f) => ({ ...f, sex: e.target.value }))
              }
            />
            M
          </label>
          <label>
            <input
              type="radio"
              name="sex"
              value="F"
              onChange={(e) =>
                setFormData((f) => ({ ...f, sex: e.target.value }))
              }
            />
            F
          </label>
        </label>
        <div>
          <button
            onClick={() => {
              setMessage(text());
              console.log(compiledForm);
            }}
          >
            Sign Up
          </button>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}
