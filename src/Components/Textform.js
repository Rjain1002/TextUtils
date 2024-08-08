import React, { useState } from "react";
const _ = require("lodash");
export default function Textform() {
  const [text, setText] = useState("");
  const [orignal, setOrignal] = useState(text);
  const handleupclick = () => {
    let t = text.toUpperCase();
    setText(t);
  };
  const handleorignal = () => {
    let t = orignal;
    setText(t);
  };
  const handleclear = () => {
    setText("");
  };

  const handleloclick = () => {
    let t = text.toLowerCase();
    setText(t);
  };

  const handlecamelcase = () => {
    let t = _.camelCase(text);
    setText(t);
  };
  const handleonchange = (event) => {
    setText(event.target.value);
    setOrignal(text);
  };
  return (
    <>
      <div className="container">
        <label for="mytext" class="form-label">
          <b>Write or Paste your text below</b>{" "}
        </label>
        <div className="mb-3">
          <textarea
            class="form-control"
            value={text}
            onChange={handleonchange}
            id="mytext"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleclear}>
          clear text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloclick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handlecamelcase}>
          Convert to camelCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleorignal}>
          Convert to orignal
        </button>
      </div>

      <div className="container my-3">
        <label class="form-label">
          <b>Your text summary</b>
        </label>
        <h6>
          Your text contains {text.split(" ").length - 1} words and{" "}
          {text.length} characters
        </h6>
        <h6>{0.008 * (text.split(" ").length - 1)} Minutes read</h6>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
