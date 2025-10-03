import Textbox from "./shared/Textbox";
import '../styles/WorkExperience.css';
export default function WorkExperience({companyName, positionTitle, jobDescription, dateFrom, dateTo, isSubmit=false, onChange}) {
    
    const jobDescritionList = jobDescription.split('\n').filter(item => item.trim() !== '');

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

                <textarea>
                    {jobDescription}
                </textarea>

                {/* <Textbox
                    label="Job Description"
                    name="jobDescription"
                    value={jobDescription}
                    onChange={onChange}
                    placeholder="Enter your job description"
                    isSubmitted={isSubmit}
                /> */}
            </>
        );
    }

    return (
        <>
            <div class="workExperience">
                <h2 style={{
                    textAlign: 'left',
                    textDecoration: 'underline',
                    marginBottom: '10px' }}
                > WORK EXPERIENCE
                </h2>
                <ul>
                    <li>
                        <div class="jobPosition">
                            <span className="bolded">
                            {positionTitle}
                            </span>
                            <span>
                             {dateFrom} - {dateTo}
                            </span>
                        </div>
                        <div class="jobPosition">
                            <span>
                                {companyName}
                            </span>
                        </div>
                        <div class="smallText">
                            <ul>
                                {jobDescritionList.map((item, index) => (  
                                    <li key={index} style={{
                                        textAlign: 'left',
                                    }}
                                    >  
                                        {item.trim('\n')}.
                                    </li>  
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}