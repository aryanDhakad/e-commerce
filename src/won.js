function Won() {
  return (
    <div
      style={{ maxWidth: "400px", margin: "auto", backgroundColor: "white" }}
    >
      <div style={{ textAlign: "center", fontSize: "20px", marginTop: "85px" }}>
        You have WON Paytm Gift
        <br />
        Card of Rs 200 for{" "}
        <span style={{ fontWeight: "bold" }}>
          placing the order
          <br />
          on Man Matters
        </span>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/220/220236.png"
            alt="img"
            height="40px"
          />
        </div>
        <div>
          <span style={{ fontWeight: "bold", marginBottom: "0px" }}>
            Where will i get the gift card?
          </span>
          <br />
          You will receive it on Whatsapp/SMS <br /> on your mobile
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/2611/2611195.png"
            alt="img"
            height="40px"
          />
        </div>
        <div>
          <span style={{ fontWeight: "bold", marginBottom: "0px" }}>
            When will i receive the gift card?
          </span>
          <br />
          Within 48 hours, when your Man <br /> Matters order is delivered.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"
            alt="img"
            height="40px"
          />
        </div>
        <div>
          <span style={{ fontWeight: "bold", marginBottom: "0px" }}>
            What if i cancel the order?
          </span>
          <br />
          The voucher will not delivered if you <br /> cancel the order.
        </div>
      </div>
    </div>
  );
}
export default Won;
