import React, { useState } from 'react';
import ProgressBar from '../comps/ProgressBar';
import 'react-toastify/dist/ReactToastify.css';

const UploadForm = () => {
  const [file, setFile] = useState(null);

  const types = ['image/png', 'image/jpeg'];
  const changeHandler = (e) => {
    let selected = e.target.files[0];
    // Check if there's a file & if it's an allowed file
    if (selected && types.includes(selected.type)) {
      setFile(selected);
    } else {
      setFile(null);
    }
  };

  return (
    <form>
      <label>
        <input type="file" name="" id="" onChange={changeHandler} />
        <span>+</span>
      </label>
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};

export default UploadForm;
