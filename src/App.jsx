import { useState } from 'react';
import './App.css';
import Information from './components/Information';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

function App() {
  const [isPrevious, setIsPrevious] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [informationSection, setInformationSection] = useState({
    name: 'Jay Cen',
    email: 'Jaycenusa@gmail.com',
    phoneNo: '929-527-2825',
    address: 'New York, NY',
  });

  const [educationSection, setEducationSection] = useState({
    schoolName: 'York University (Toronto, Canada)',
    titleOfStudy: 'Bachelor of Science in Computer Science',
    dateOfStudy: 'September 2016 - August 2021',
  });

  const [workExperienceSection, setWorkExperienceSection] = useState({
    companyName: 'Rogers Telecomunnication Inc.',
    positionTitle: 'Software Developer',
    jobDescription: 'Developed and maintained web applications using React and Node.js. \n Collaborated with cross-functional teams to design and implement new features, improving user experience and performance. ',
    dateFrom: 'June 2022',
    dateTo: 'June 2025',
  });

  function handleInformationChange(e) {
    const { name, value } = e.target;
    setInformationSection((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleEducationChange(e) {
    const { name, value } = e.target;
    setEducationSection((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleWorkExperienceChange(e) {
    const { name, value } = e.target;
    setWorkExperienceSection((prevState) => ({  
      ...prevState,   
      [name]: value,
    }));  
  }

  const handleSubmit = () => {
    setIsSubmitted(true);
    setIsPrevious(false);
  };

  const handlePrevious = () => {
    setIsPrevious(true);
    setIsSubmitted(false);
  };

  return (
    <>
      <div style={{ width: '100%', padding: '1cm', display: 'flex', flexDirection: 'column', height: "100%" }}>
        <Information
          name={informationSection.name}
          email={informationSection.email}
          phoneNo={informationSection.phoneNo}
          address={informationSection.address}
          isSubmit={isSubmitted}
          onChange={handleInformationChange}
        />

        <WorkExperience
          companyName={workExperienceSection.companyName}
          positionTitle={workExperienceSection.positionTitle}
          jobDescription={workExperienceSection.jobDescription}
          dateFrom={workExperienceSection.dateFrom}
          dateTo={workExperienceSection.dateTo}
          isSubmit={isSubmitted}
          onChange={handleWorkExperienceChange}
        />

        <Education
          schoolName={educationSection.schoolName}
          titleOfStudy= {educationSection.titleOfStudy}
          dateOfStudy={educationSection.dateOfStudy}
          isSubmit={isSubmitted}
          onChange={handleEducationChange}
        />

        <button
          onClick={handlePrevious}
          style={{
            disable: isPrevious ? 'true' : 'false',
            position: 'fixed',
            bottom: '20px',
            left: '20px',
            padding: '10px 20px',
            backgroundColor: isPrevious ? '#6c757d': '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Previous
        </button>

        <button
          onClick={handleSubmit}
          disabled= {isSubmitted ? true : false}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: isSubmitted? '#6c757d': '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Submit
        </button>
      </div>  

      {/* <div style={{ flex: 1, padding: '10px', width: '100%' }}>
        <span style={{ fontWeight: 'bold' }}>Skills Section:</span>
      </div>

      <div style={{ flex: 1, padding: '10px', width: '100%' }}>
        <span style={{ fontWeight: 'bold' }}>Projects Section:</span>
      </div> */}
    </>
  );
}

export default App;
