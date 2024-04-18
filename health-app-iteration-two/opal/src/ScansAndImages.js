// ScansAndImages.js
import React, { useState } from 'react';
import './ScansAndImages.css';
import { FaSearch, FaDownload } from 'react-icons/fa';

function ScansAndImages() {
  const [selectedImage, setSelectedImage] = useState(null);

  const scansAndImages = [
    {
      id: 1,
      date: '2023-05-05',
      imageName: 'Chest X-Ray',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Chest+X-Ray',
      notes: 'Normal chest x-ray. No abnormalities detected.',
      doctor: 'Dr. Michael Johnson',
      facility: 'City Medical Imaging Center',
    },
    {
      id: 2,
      date: '2023-04-10',
      imageName: 'MRI Scan',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=MRI+Scan',
      notes: 'MRI of the lumbar spine. Mild degenerative changes noted.',
      doctor: 'Dr. Emily Davis',
      facility: 'Advanced Radiology Services',
    },
    // ... more scans and images
  ];

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleDownloadImage = () => {
    // Implement image download functionality
    console.log('Downloading image:', selectedImage);
  };

  return (
    <div className="scans-and-images">
      <h2>Scans and Images</h2>
      <div className="image-grid">
        {scansAndImages.map((item) => (
          <div key={item.id} className="image-card">
            <img
              src={item.imageUrl}
              alt={item.imageName}
              onClick={() => handleImageClick(item.imageUrl)}
            />
            <div className="image-details">
              <h3>{item.imageName}</h3>
              <p>{item.date}</p>
              <p>Doctor: {item.doctor}</p>
              <p>Facility: {item.facility}</p>
              <p>{item.notes}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Scan or Image" />
            <div className="modal-actions">
              <button className="download-button" onClick={handleDownloadImage}>
                <FaDownload /> Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ScansAndImages;