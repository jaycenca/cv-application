import Textbox from "./shared/Textbox";
export default function Information({name, email, phoneNo, address, isSubmit=false, onChange}) {
    
    if (!isSubmit) {
        return (
            <>
                <span style={{ fontWeight: 'bold' }}>Information Section:</span>
                <Textbox 
                   label="Full Name"
                   name="name"
                   value={name}
                   onChange={onChange}
                   placeholder="Enter your full name"
                   isSubmitted={isSubmit}                    
                />

                <Textbox
                    label="Email Address"
                    name="email"
                    value={email}
                    onChange={onChange}
                    placeholder="Enter your email address"
                    isSubmitted={isSubmit}
                />

                <Textbox
                    label="Phone Number"
                    name="phoneNo"
                    value={phoneNo}
                    onChange={onChange}
                    placeholder="Enter your phone number"
                    isSubmitted={isSubmit}
                />

                <Textbox
                    label="Address"
                    name="address"
                    value={address}
                    onChange={onChange}
                    placeholder="Enter your address"
                    isSubmitted={isSubmit}
                />
            </>
        );
    }

    return (
        <>
            <div>
                <h1>{name}</h1>
                <p>{email} | {phoneNo} | {address}</p>
            </div>
        </>
    );
}