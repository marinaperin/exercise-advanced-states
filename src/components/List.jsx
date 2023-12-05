import { useState } from "react";

export default function ({ greet }) {
  const [list, setList] = useState([]);
  const [guest, setGuest] = useState("");
  const [greeting, setGreeting] = useState("");

  return (
    <>
      <h3>Exercise 3</h3>
      <div>
        <input
          type="text"
          value={guest}
          onChange={(e) => setGuest(e.target.value)}
        />
        <button
          onClick={() => {
            setList([...list, guest]);
            setGuest("");
          }}
        >
          Add
        </button>
        <ul>
          {list.map((guest, i) => {
            return (
              <li key={`guest${i}`}>
                {guest}
                <button
                  className="ex-3-btn"
                  onClick={() => {
                    setList(list.filter((el) => el !== guest));
                    {
                      if (greeting.includes(guest)) {
                        setGreeting("");
                      }
                    }
                  }}
                >
                  Remove
                </button>
                <button
                  className="ex-3-btn"
                  onClick={() => setGreeting(greet(guest))}
                >
                  Greet
                </button>
              </li>
            );
          })}
        </ul>
        <p>{greeting}</p>
      </div>
    </>
  );
}
