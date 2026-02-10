import { useState } from "react";
import axios from "axios";

function CertificateUpload() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    await axios.post(
      "http://localhost:5000/api/certificates",
      formData
    );

    alert("Certificate uploaded");
    setTitle("");
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "40px" }}>
      <h3>Upload Certificate</h3>

      <input
        type="text"
        placeholder="Certificate title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <br /><br />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />

      <br /><br />

      <button type="submit">Upload</button>
    </form>
  );
}

export default CertificateUpload;
