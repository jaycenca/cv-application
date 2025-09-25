import Textbox from "./shared/Textbox";
export default function WorkExperience({companyName, positionTitle, jobDescription, dateFrom, dateTo, isSubmit=false, onChange}) {
    
    if (!isSubmit) {
        return (
            <>
                <span style={{ fontWeight: 'bold' }}>Experience Section:</span>
                <Textbox 
                   label="Company Name"
                   name="companyName"
                   value={companyName}
                   onChange={onChange}
                   placeholder="Enter your company name"
                   isSubmitted={isSubmit}                    
                />

                <Textbox
                    label="Position Title"
                    name="positionTitle"
                    value={positionTitle}
                    onChange={onChange}
                    placeholder="Enter your title of position"
                    isSubmitted={isSubmit}
                />

                <Textbox
                    label="Job Description"
                    name="jobDescription"
                    value={jobDescription}
                    onChange={onChange}
                    placeholder="Enter your job description"
                    isSubmitted={isSubmit}
                />

                <Textbox
                    label="Date From"
                    name="dateFrom"
                    value={dateFrom}
                    onChange={onChange}
                    placeholder="Enter your start date (e.g., May 2015)"
                    isSubmitted={isSubmit}
                />

                <Textbox
                    label="Date To"
                    name="dateTo"
                    value={dateTo}
                    onChange={onChange}
                    placeholder="Enter your end date (e.g., May 2019 or Present)"
                    isSubmitted={isSubmit} 
                />
            </>
        );
    }

    return (
        <>
            <div>
                <h1>Work Experience</h1>
                <p>{companyName} | {positionTitle} | {dateFrom} - {dateTo}</p>
            </div>
        </>
    );
}