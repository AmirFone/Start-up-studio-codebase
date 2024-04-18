// TestReports.js
import React from 'react';
import './TestReports.css';

function TestReports() {
  const testReports = [
    {
      id: 1,
      date: '2023-05-15',
      testName: 'Complete Blood Count (CBC)',
      result: 'Normal',
      notes: 'All parameters within normal range.',
    },
    {
      id: 2,
      date: '2023-04-20',
      testName: 'Lipid Panel',
      result: 'Borderline',
      notes: 'Slightly elevated LDL cholesterol levels. Recommend lifestyle changes.',
    },
    // ... more test reports
  ];

  return (
    <div className="test-reports">
      <h2>Test Reports</h2>
      {testReports.map((report) => (
        <div key={report.id} className="report-card">
          <div className="report-header">
            <h3>{report.testName}</h3>
            <p>{report.date}</p>
          </div>
          <div className="report-content">
            <p><strong>Result:</strong> {report.result}</p>
            <p><strong>Notes:</strong> {report.notes}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TestReports;