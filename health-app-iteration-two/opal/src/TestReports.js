// TestReports.js
import React, { useState } from 'react';
import './TestReports.css';
import { FaShare } from 'react-icons/fa';
function TestReports() {
  const [sharedReportId, setSharedReportId] = useState(null);

  const testReports = [
    {
      id: 1,
      date: '2023-05-15',
      testName: 'Complete Blood Count (CBC)',
      result: 'Normal',
      notes: 'All parameters within normal range.',
      details: {
        hemoglobin: '14.2 g/dL',
        plateletCount: '250,000/mcL',
        whiteBloodCells: '6,500/mcL',
        redBloodCells: '4.8 million/mcL',
      },
    },
    {
      id: 2,
      date: '2023-04-20',
      testName: 'Lipid Panel',
      result: 'Borderline',
      notes: 'Slightly elevated LDL cholesterol levels. Recommend lifestyle changes.',
      details: {
        totalCholesterol: '200 mg/dL',
        ldlCholesterol: '130 mg/dL',
        hdlCholesterol: '50 mg/dL',
        triglycerides: '150 mg/dL',
      },
    },
    {
      id: 3,
      date: '2023-03-10',
      testName: 'Thyroid Function Tests',
      result: 'Abnormal',
      notes: 'TSH levels slightly elevated. Repeat test in 6 months.',
      details: {
        tsh: '5.2 mIU/L',
        t4: '1.1 ng/dL',
        t3: '120 ng/dL',
      },
    },
    {
      id: 4,
      date: '2023-02-01',
      testName: 'Kidney Function Tests',
      result: 'Normal',
      notes: 'All kidney function parameters within normal range.',
      details: {
        bun: '18 mg/dL',
        creatinine: '0.9 mg/dL',
        gfr: '90 mL/min/1.73m²',
      },
    },
    {
      id: 5,
      date: '2023-01-15',
      testName: 'Liver Function Tests',
      result: 'Borderline',
      notes: 'Slightly elevated ALT levels. Recommend follow-up test.',
      details: {
        alt: '55 U/L',
        ast: '30 U/L',
        alkalinePhosphatase: '80 U/L',
        bilirubinTotal: '0.8 mg/dL',
      },
    },
  ];

  const handleShareReport = (reportId) => {
    // Generate signed URL for the selected report
    const signedUrl = `https://example.com/test-reports/${reportId}/share`;
    navigator.clipboard.writeText(signedUrl);
    setSharedReportId(reportId);
    setTimeout(() => {
      setSharedReportId(null);
    }, 2000);
  };

  return (
    <div className="test-reports">
      <h2>Test Reports</h2>
      {testReports.map((report) => (
        <div key={report.id} className={`report-card ${sharedReportId === report.id ? 'shared' : ''}`}>
          <div className="report-header">
            <h3>{report.testName}</h3>
            <p>{report.date}</p>
          </div>
          <div className="report-content">
            <p><strong>Result:</strong> {report.result}</p>
            <p><strong>Notes:</strong> {report.notes}</p>
            <div className="report-details">
              <h4>Test Details:</h4>
              <ul>
                {Object.entries(report.details).map(([key, value]) => (
                  <li key={key}>{key}: {value}</li>
                ))}
              </ul>
            </div>
          </div>
          <button className="share-button" onClick={() => handleShareReport(report.id)}>
            <FaShare className="share-icon" />
            {sharedReportId === report.id ? 'Copied!' : 'Share'}
          </button>
        </div>
      ))}
    </div>
  );
}

export default TestReports;