import React, { useState } from 'react';

const SeatAvailability = () => {
    const backgroundImageUrl = '../../assets/images/TrainImg.jpg';
    const [trainInput, setTrainInput] = useState('');
    const [availability, setAvailability] = useState(null);

    const handleCheckAvailability = () => {
        // Simulating seat availability data for demonstration purposes
        const sampleAvailability = {
            AC: 20,
            Sleeper: 50,
            General: 100,
        };
        setAvailability(sampleAvailability);
    };

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {/* Outer Box with increased width */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 25px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '65%', // Increased width for the outer box
                maxWidth: '550px',
                marginBottom: '20px'
            }}>
                {/* Input box with increased width */}
                <input
                    type="text"
                    placeholder="Enter Train Number or Name"
                    value={trainInput}
                    onChange={(e) => setTrainInput(e.target.value)}
                    style={{
                        width: '85%', // Increased width for the input box
                        padding: '8px',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        outline: 'none',
                        marginRight: '10px'
                    }}
                />
                <button
                    onClick={handleCheckAvailability}
                    style={{
                        padding: '10px 25px', // Increased padding for button
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap' // Ensure text stays on one line
                    }}
                >
                    Check Availability
                </button>
            </div>

            {/* Seat Availability Display */}
            {availability && (
                <div style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    width: '50%', // Smaller width for the Seat Availability box
                    maxWidth: '450px'
                }}>
                    <h3 style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        textDecoration: 'underline',
                        marginBottom: '15px'
                    }}>
                        Seat Availability
                    </h3>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginBottom: '8px'
                        }}>
                            <span>AC:</span>
                            <span>{availability.AC} seats available</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            marginBottom: '8px'
                        }}>
                            <span>Sleeper:</span>
                            <span>{availability.Sleeper} seats available</span>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%'
                        }}>
                            <span>General:</span>
                            <span>{availability.General} seats available</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SeatAvailability;
