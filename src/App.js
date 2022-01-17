import { useState } from "react";
import Used from "./used";
import { Route } from "react-router-dom";
import Won from "./won";
import Header from "./header";

function App() {
  const [number, setNumber] = useState([]);
  const [won, setWon] = useState(false);
  const [show, setShow] = useState(false);

  function Validate(e) {
    e.preventDefault();

    if (number.length !== 10) {
      alert("Please enter 10 numbers");
      return;
    }
    let numbers = [];
    let nm = JSON.parse(localStorage.getItem("numbers"));

    if (nm !== null) {
      numbers = nm.data;
    }

    let isDuplicate = numbers.indexOf(number) !== -1;

    setNumber("");

    setShow(true);

    if (isDuplicate) {
      alert("You have already used this number");
      return;
    } else {
      localStorage.setItem(
        "numbers",
        JSON.stringify({ data: [...numbers, number] })
      );
      setWon(true);
    }
  }

  return (
    <div
      style={{
        minHeight: "720px",
        maxWidth: "400px",
        margin: "auto",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          height: "300px",
          maxWidth: "400px",
          margin: "auto",
          backgroundColor: "black",
          color: "white",
          marginTop: "10px",
          marginBottom: "20vh",
          position: "relative",
        }}
      >
        <div
          style={{ textAlign: "center", fontSize: "30px", paddingTop: "20px" }}
        >
          man
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            paddingLeft: "70px",
            marginTop: "-15px",
          }}
        >
          matters
        </div>
        <div
          style={{
            color: "pink",
            textAlign: "center",
            fontSize: "28px",
            marginTop: "30px",
          }}
        >
          Congratulations{" "}
          <img
            src="https://cdn-icons.flaticon.com/png/128/2274/premium/2274543.png?token=exp=1641393289~hmac=42a46c313a58dff58cae3bd1410d6425"
            alt="img"
            height="25px"
          />
        </div>

        <div
          style={{
            height: "200px",
            width: "340px",
            textAlign: "center",
            position: "absolute",
            top: "55%",
            left: "10%",
            backgroundColor: "white",
            marginTop: "20px",
            borderRadius: "25px",
            boxShadow: " 2px 5px #888888",
          }}
        >
          <div
            style={{
              marginTop: "30px",
              color: "blue",
              marginBottom: "30px",
              fontSize: "25px",
            }}
          >
            pay<span style={{ color: "orange" }}>tm</span>
          </div>
          <div style={{ fontSize: "25px", color: "pink" }}>Gift Card</div>
          <div style={{ fontSize: "25px", color: "pink" }}>Of</div>
          <div style={{ fontSize: "35px", color: "blue" }}>Rs 200</div>
        </div>
      </div>

      {show ? won ? <Won /> : <Used /> : <Header />}

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <input
          type="tel"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          placeholder="Enter Mobile Number"
          value={number}
          style={{
            height: "50px",
            width: "300px",
            borderRadius: "25px",
            fontSize: "20px",
            textAlign: "center",
            backgroundColor: "lightgrey",
            border: "none",
          }}
        />
      </div>
      <div style={{ textAlign: "center", fontSize: "10px", marginTop: "5px" }}>
        Enter the same number used on Man Matters
      </div>

      <button
        style={{
          marginLeft: "30px",
          marginTop: "30px",
          height: "50px",
          width: "350px",
          borderRadius: "25px",
          fontSize: "20px",
          textAlign: "center",
          backgroundColor: "lightblue",
          border: "none",
        }}
        onClick={(e) => Validate(e)}
      >
        Wow! Get my Paytm Gift Card{" "}
      </button>

      <div style={{ textAlign: "center", fontSize: "10px", marginTop: "30px" }}>
        Powered by{" "}
        <img
          src="https://th.bing.com/th/id/OIP.46DYDN6HAnhvb3OPC1yewwHaCQ?pid=ImgDet&rs=1"
          alt="img"
          height="20px"
        />
      </div>
    </div>
  );
}

export default App;
