// ScansAndImages.js
import React, { useState } from 'react';
import './Style-sheets/ScansAndImages.css';
import { FaDownload } from 'react-icons/fa';

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
    {
      id: 3,
      date: '2023-03-20',
      imageName: 'CT Scan',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=CT+Scan',
      notes: 'CT scan of the abdomen and pelvis. No significant findings.',
      doctor: 'Dr. Daniel Thompson',
      facility: 'Radiology Associates',
    },
    {
      id: 4,
      date: '2023-02-15',
      imageName: 'Mammogram',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Mammogram',
      notes: 'Routine screening mammogram. Benign findings.',
      doctor: 'Dr. Sarah Wilson',
      facility: 'Comprehensive Breast Care Center',
    },
    {
      id: 5,
      date: '2023-01-25',
      imageName: 'Ultrasound',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Ultrasound',
      notes: 'Abdominal ultrasound. No abnormalities detected.',
      doctor: 'Dr. David Lee',
      facility: 'Imaging Specialists',
    },
    {
      id: 6,
      date: '2022-12-10',
      imageName: 'PET Scan',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=PET+Scan',
      notes: 'PET scan for cancer staging. Findings consistent with early-stage disease.',
      doctor: 'Dr. Jessica Thompson',
      facility: 'Oncology Imaging Center',
    },
    {
      id: 7,
      date: '2022-11-20',
      imageName: 'Bone Density Scan',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Bone+Density+Scan',
      notes: 'Bone density scan. Results indicate osteopenia.',
      doctor: 'Dr. Robert Anderson',
      facility: 'Orthopedic Imaging Services',
    },
    {
      id: 8,
      date: '2022-10-05',
      imageName: 'MRI Brain Scan',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=MRI+Brain+Scan',
      notes: 'MRI of the brain. No significant abnormalities found.',
      doctor: 'Dr. Emily Davis',
      facility: 'Neuro Imaging Associates',
    },
    {
      id: 9,
      date: '2022-09-15',
      imageName: 'Echocardiogram',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Echocardiogram',
      notes: 'Echocardiogram to evaluate heart function. Normal findings.',
      doctor: 'Dr. Michael Johnson',
      facility: 'Cardiology Diagnostics',
    },
    {
      id: 10,
      date: '2022-08-25',
      imageName: 'Dental X-Ray',
      imageUrl: 'https://via.placeholder.com/600x400.png?text=Dental+X-Ray',
      notes: 'Routine dental x-rays. No cavities or concerns noted.',
      doctor: 'Dr. Jennifer Brown',
      facility: 'Smiles Dental Clinic',
    },
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