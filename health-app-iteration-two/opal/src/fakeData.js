export const fakeData = [
	{ id: 1, title: 'Dr. John Doe', category: 'Cardiologist' },
	{ id: 2, title: 'Headache', category: 'Symptom' },
	{ id: 3, title: 'XYZ Pharmacy', category: 'Pharmacy' },
	{ id: 4, title: 'Blood Test Results', category: 'Test Results' },
	{ id: 5, title: 'Dr. Jane Smith', category: 'Dermatologist' },
	{ id: 6, title: 'Fever', category: 'Symptom' },
	{ id: 7, title: 'ABC Pharmacy', category: 'Pharmacy' },
	{ id: 8, title: 'MRI Scan Report', category: 'Test Results' },
	// More entries...
      ];
      
      // Generate doctors with different specialties
      const specialties = ['Cardiologist', 'Dermatologist', 'Neurologist', 'Pediatrician', 'Oncologist', 'Ophthalmologist', 'Orthopedic', 'Gastroenterologist', 'Psychiatrist', 'Urologist'];
      const symptoms = ['Headache', 'Fever', 'Cough', 'Fatigue', 'Nausea', 'Dizziness', 'Chest Pain', 'Shortness of Breath', 'Abdominal Pain', 'Back Pain'];
      const pharmacies = ['XYZ Pharmacy', 'ABC Pharmacy', '123 Pharmacy', 'Wellness Pharmacy', 'Health Plus Pharmacy', 'MediQuick Pharmacy', 'Corner Drugstore', 'Family Pharmacy', 'Downtown Pharmacy', 'Safe Meds Pharmacy'];
      const tests = ['Blood Test Results', 'MRI Scan Report', 'X-Ray Results', 'Ultrasound Results', 'CT Scan Results', 'Biopsy Report', 'Allergy Test Results', 'Hormone Panel Results', 'Metabolic Panel Results', 'Lipid Panel Results'];
      
      let idCounter = 9;
      
      for (let i = 0; i < 100; i++) {
	// Doctors
	for (let s = 0; s < specialties.length; s++) {
	  fakeData.push({ id: idCounter++, title: `Dr. ${['John', 'Jane', 'Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Hank'][i % 10]} ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis', 'Garcia', 'Rodriguez', 'Wilson'][i % 10]}`, category: specialties[s] });
	}
	// Symptoms
	for (let sy = 0; sy < symptoms.length; sy++) {
	  fakeData.push({ id: idCounter++, title: symptoms[sy], category: 'Symptom' });
	}
	// Pharmacies
	for (let p = 0; p < pharmacies.length; p++) {
	  fakeData.push({ id: idCounter++, title: pharmacies[p], category: 'Pharmacy' });
	}
	// Test results
	for (let t = 0; t < tests.length; t++) {
	  fakeData.push({ id: idCounter++, title: tests[t], category: 'Test Results' });
	}
      }
      
//       console.log(fakeData);
      