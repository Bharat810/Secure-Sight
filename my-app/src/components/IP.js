import React, { useState } from 'react';

const MaliciousIpChecker = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [isMalicious, setIsMalicious] = useState(null);
    const [loading, setLoading] = useState(false);

    const checkIp = async () => {
        setLoading(true);
        try {
            const response = await fetch(https://www.virustotal.com/api/v3/ip_addresses/${ipAddress}, {
                headers: {
                    'x-apikey': 'YOUR_API_KEY',
                },
            });
            const data = await response.json();
            setIsMalicious(data.data.attributes.reputation !== 'none');
        } catch (error) {
            console.error('Error checking IP:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        // Regex to match IPv4 address pattern without a dot at the end
        const ipRegex = /^$|^(\d{1,3}\.){0,3}(\d{1,3})?$/;
        if (ipRegex.test(value)) {
            setIpAddress(value);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
            <h1 style={{ color: 'rgb(0,255,128)', marginBottom: '10px', fontSize: '3.5em' }}>IP Scanning</h1>
            <div style={{ backgroundColor: 'black', padding: '10px', borderRadius: '5px' }}>
                <input
                    type="text"
                    placeholder="Enter IPv4 address"
                    value={ipAddress}
                    onChange={handleInputChange}
                    style={{ padding: '5px', marginRight: '10px' }}
                />
                <button onClick={checkIp} disabled={!ipAddress || loading} style={{ padding: '5px 10px', backgroundColor: 'rgb(0,255,128)', color: 'black', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                    {loading ? 'Checking...' : 'Check'}
                </button>
                {isMalicious !== null && (
                    <p style={{ color: 'rgb(0,255,128)', marginTop: '10px', fontSize: '16px' }}>
                        {isMalicious ? 'IP is malicious' : 'IP is not malicious'}
                    </p>
                )}
            </div>
            <p style={{ color: 'rgb(0,255,128)', marginTop: '10px', fontSize: '1.7em', textAlign: 'center', fontWeight: 'bold' }}>
                 IP Scanning: It is the process of checking an IP address against known threat intelligence databases to determine if it is associated with malicious activity.
            </p>
        </div>
    );
};

export default MaliciousIpChecker;
