import { useState } from "react";

const Contact = () => {

  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setSuccessMsg("Form submitted successfully ✅");
  };

  return (
    <div className="page">

      <form onSubmit={handleSubmit}>

        <div>
          <label>Full Name:</label><br />
          <input type="text" id="name" placeholder="Enter your name" />
        </div>

        <div>
          <label>Phone number:</label><br />
          <input type="tel" id="phone" placeholder="Enter Ph number" />
        </div>

        <div>
          <label>Email:</label><br />
          <input type="email" id="email" placeholder="Enter your email" />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>

      </form>

      <p className="success">{successMsg}</p>

    </div>
  );
};
<footer>Contact:+91 9585177505  @gmail.com</footer>

export default Contact;
