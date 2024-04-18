// ScansAndImages.js
import React from 'react';
import './ScansAndImages.css';

function ScansAndImages() {
  const scansAndImages = [
    {
      id: 1,
      date: '2023-05-05',
      imageName: 'Chest X-Ray',
      imageUrl: 'path/to/chest-xray.jpg',
      notes: 'Normal chest x-ray. No abnormalities detected.',
    },
    {
      id: 2,
      date: '2023-04-10',
      imageName: 'MRI Scan',
      imageUrl: 'path/to/mri-scan.jpg',
      notes: 'MRI of the lumbar spine. Mild degenerative changes noted.',
    },
    // ... more scans and images
  ];

  return (
    <div className="scans-and-images">
      <h2>Scans and Images</h2>
      {scansAndImages.map((item) => (
        <div key={item.id} className="image-card">
          <img src={item.imageUrl} alt={item.imageName} />
          <div className="image-details">
            <h3>{item.imageName}</h3>
            <p>{item.date}</p>
            <p>{item.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScansAndImages;