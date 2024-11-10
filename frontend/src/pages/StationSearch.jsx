import React from 'react';

const StationSearch = () => {
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
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                width: '50%',
                maxWidth: '400px'
            }}>
                <input
                    type="date"
                    placeholder="Start Date"
                    style={{
                        marginBottom: '10px',
                        padding: '8px',
                        width: '100%',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        outline: 'none'
                    }}
                />
                <input
                    type="text"
                    placeholder="Station Name/Code"
                    style={{
                        marginBottom: '10px',
                        padding: '8px',
                        width: '100%',
                        borderRadius: '4px',
                        border: '1px solid #ddd',
                        outline: 'none'
                    }}
                />
                <button style={{
                    padding: '10px 20px',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    width: '100%'
                }}>
                    Search Trains
                </button>
            </div>
        </div>
    );
};

export default StationSearch;
