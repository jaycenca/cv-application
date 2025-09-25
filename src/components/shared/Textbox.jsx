export default function Textbox({ label, name, value, onChange, placeholder, isSubmitted }) { 
    if (!isSubmitted) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '15px' }}>
                <label style={{ marginBottom: '5px' }}>{label}</label>
                <input
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={{ padding: '8px', width: '250px', borderRadius: '4px', border: '1px solid #ccc' }}
                />
            </div>
        );
    }

    return (
        <>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%' }}>
                <h1>{value}</h1>
            </div>
        </>
    );
}