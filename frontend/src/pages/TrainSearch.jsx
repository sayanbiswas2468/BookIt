import React from 'react';

const TrainSearch = () => {
    const backgroundImageUrl = '../../assets/images/TrainImg.jpg';

    return (
        <div
            style={{
                backgroundImage: `url(${backgroundImageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <div style={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '50%',
                maxWidth: '400px'
            }}>
                <input
                    type="text"
                    placeholder="Enter Train Name/Number"
                    style={{
                        flex: 1,
                        padding: '8px',
                        border: 'none',
                        outline: 'none'
                    }}
                />
                <button style={{
                    padding: '8px 16px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default TrainSearch;
