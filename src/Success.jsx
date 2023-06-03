import "./success.css"

function Success() {
    return (
        <div style={{
            textAlign: "center",
            padding: "40px 0",
        }} className={"successcard"}>
            <div className="card">
                <div style={{
                    borderRadius: "200px",
                    height: "200px",
                    width: "200px",
                    background: "#F8FAF5",
                    margin: "0 auto"
                }}>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>Thank you for your feedback</p>
            </div>
        </div>
    )
}

export default Success;