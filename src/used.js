function Used() {
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
          marginTop: "30px",
          fontSize: "30px",
          fontWeight: "bold",
          textAlign: "center",
          color: "blue",
          paddingBottom: "50px",
        }}
      >
        THANK YOU <br />
        <span style={{ color: "green" }}>
          You have already used <br /> the gift card.
        </span>
      </div>
    </div>
  );
}
export default Used;
