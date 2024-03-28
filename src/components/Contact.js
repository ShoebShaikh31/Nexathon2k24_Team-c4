import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [db, setDb] = useState(null);

  useEffect(() => {
    const request = window.indexedDB.open("formDataDB", 1);

    request.onerror = function (event) {
      console.error("IndexedDB error:", event.target.errorCode);
    };

    request.onsuccess = function (event) {
      const database = event.target.result;
      setDb(database);
    };

    request.onupgradeneeded = function (event) {
      const database = event.target.result;
      const objectStore = database.createObjectStore("formData", {
        keyPath: "id",
        autoIncrement: true,
      });
      objectStore.createIndex("name", "name", { unique: false });
      objectStore.createIndex("phone", "phone", { unique: false });
      objectStore.createIndex("subject", "subject", { unique: false });
      objectStore.createIndex("message", "message", { unique: false });
    };
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (db) {
      const transaction = db.transaction(["formData"], "readwrite");
      const objectStore = transaction.objectStore("formData");
      objectStore.add(formData);

      setFormData({
        name: "",
        phone: "",
        subject: "",
        message: "",
      });

      alert("Form data saved to IndexedDB!");
    } else {
      console.error("IndexedDB not available.");
    }
  };

  return (
    <section className="contact">
      <div>
        <div className="col-lg-12">
          <h1 className="page-title">Contact Us</h1>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <h5>Mail</h5>
              <h6>c4construction@gmail.com</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <h5>Address</h5>
              <h6>Bandra West, Mumbai</h6>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="contact-item">
              <i className="fas fa-phone-alt"></i>
              <h5>Phone</h5>
              <h6>+91 98765 56789</h6>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name Surname</label>
            <input
              type="text"
              id="name"
              name="name"
              className="inp-contact"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="inp-contact"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="inp-contact"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="ta-contact"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="btn-contact">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

// const Contact = () => {
//   return (
//     <section className="contact">
//       <div className="page-top">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <h1 className="page-title">Contact Us</h1>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="page-content">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="row">
//                 <div className="col-lg-4">
//                   <div className="contact-item">
//                     <i className="fas fa-envelope"></i>
//                     <h5>Mail</h5>
//                     <h6>c4construction@gmail.com</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                   <div className="contact-item">
//                     <i className="fas fa-map-marker-alt"></i>
//                     <h5>Address</h5>
//                     <h6>Bandra West, Mumbai</h6>
//                   </div>
//                 </div>
//                 <div className="col-lg-4">
//                   <div className="contact-item">
//                     <i className="fas fa-phone-alt"></i>
//                     <h5>Phone</h5>
//                     <h6>+91 98765 56789</h6>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-12">
//               <div className="row mt-5">
//                 <form action="">
//                   <div className="col-lg-6">
//                     <label>Name Surname</label>
//                     <input type="text" className="inp-contact" />
//                   </div>
//                   <div className="col-lg-6">
//                     <label>Phone</label>
//                     <input type="text" className="inp-contact" />
//                   </div>
//                   <div className="col-lg-12">
//                     <label>Subject</label>
//                     <input type="text" className="inp-contact" />
//                   </div>
//                   <div className="col-lg-12">
//                     <label>Message</label>
//                     <textarea
//                       type="text"
//                       className="ta-contact"
//                       rows="4"
//                     ></textarea>
//                   </div>
//                   <div className="col-lg-12">
//                     <button className="btn-contact">Send Message</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
