import Textbox from "./shared/Textbox";
import '../styles/Education.css';
export default function Education({schoolName, titleOfStudy, dateOfStudy, isSubmit=false, onChange}) {
    
    if (!isSubmit) {
        return (
            <>
                <span style={{ fontWeight: 'bold' }}>Education Section:</span>
                <Textbox 
                   label="School Name"
                   name="schoolName"
                   value={schoolName}
                   onChange={onChange}
                   placeholder="Enter your school name"
                   isSubmitted={isSubmit}                    
                />

                <Textbox
                    label="Title of Study"
                    name="title"
                    value={titleOfStudy}
                    onChange={onChange}
                    placeholder="Enter your title of study"
                    isSubmitted={isSubmit}
                />

                <Textbox
                    label="Date of study"
                    name="dateOfStudy"
                    value={dateOfStudy}
                    onChange={onChange}
                    placeholder="Enter your date of study (e.g., May 2015- May 2019)"
                    isSubmitted={isSubmit}
                />
            </>
        );
    }

    return (
        <>
            <div>
                <h2 style={{
                    textAlign: 'left',
                    textDecoration: 'underline',
                    marginBottom: '10px' }}
                > EDUCATION
                </h2>
                <div style={{
                    textAlign: 'left',
                }}>
                    <p>{titleOfStudy}</p>
                    <p>{schoolName}</p>
                    <p>{dateOfStudy}</p>
                </div>
                </div>
        </>
    );
}