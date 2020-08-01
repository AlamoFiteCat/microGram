import React, { useState } from 'react';
// Components
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import { ToastContainer } from 'react-toastify';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
      )}
    </div>
  );
}

export default App;
