import { useState } from "react";

export default function ({ greet }) {
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  return (
    <>
    <h3>Exercise 1</h3>
      <div>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            setGreeting(greet(userName));
            setUserName("");
          }}
        >
          Submit
        </button>
        <p>{greeting}</p>
      </div>
    </>
  );
}
