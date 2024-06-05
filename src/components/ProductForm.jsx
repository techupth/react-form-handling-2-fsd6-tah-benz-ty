import { useState } from "react";

function ProductForm() {
  const [enterName, setEnterName] = useState("Enter name here");
  const [enterImage, setEnterImage] = useState("Enter image url here");
  const [enterPrice, setEnterPrice] = useState("Enter price here");
  const [enterDescription, setEnterDescription] = useState(
    "Enter description here"
  );

  const handleSummit = (event) => {
    event.preventDefault();

    const data = {
      name: enterName,
      image: enterImage,
      price: enterPrice,
      description: enterDescription,
    };

    alert(JSON.stringify(data));
  };

  return (
    <form className="post-form" onSubmit={handleSummit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder={enterName}
            onChange={(event) => {
              setEnterName(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder={enterImage}
            onChange={(event) => {
              setEnterImage(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder={enterPrice}
            onChange={(event) => {
              setEnterPrice(event.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder={enterDescription}
            onChange={(event) => {
              setEnterDescription(event.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
