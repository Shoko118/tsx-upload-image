import { useState } from "react";

const App = () => {
  const [imageData, setImageData] = useState<string | ArrayBuffer | any>("");

  function onChange(e: any) {
    const input = e.target;

    // Ensure that you have a file before attempting to read it
    if (input.files && input.files[0]) {
      // create a new FileReader to read this image and convert to base format
      const fileReader = new FileReader();

      // Define a callback function to run, when FileReader finishes its job and the store the data
      fileReader.onload = (e: string | any) => {
        setImageData(e.target.result);
      };

      //  Start the reader job and read file as a data url
      fileReader.readAsDataURL(input.files[0]);
    }
  }

  function removeImage() {
    setImageData("");
  }
  return (
    <div>
      <h1>React TS Upload Image</h1>

      {!imageData ? (
        <label className="bg-yellow-400 px-3 py-2 cursor-pointer" htmlFor="inputTag">
          Select a image
          <input onChange={(e) => onChange(e)} type="file" id="inputTag" className="hidden" accept="image/*" />
        </label>
      ) : (
        <div>
          <img src={imageData} />
          <button onClick={removeImage} className="bg-red-400 px-3 py-2">
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
