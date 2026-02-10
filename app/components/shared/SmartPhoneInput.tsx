'use client';

import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'; // Import default styles
import './phone-input.css'; // Custom styles for dark theme

interface SmartPhoneInputProps {
    value?: string;
    onChange: (value: string | undefined) => void;
    className?: string;
}

export const SmartPhoneInput = ({ value, onChange, className }: SmartPhoneInputProps) => {
    const [country, setCountry] = useState<any>('SG'); // Default to Singapore

    useEffect(() => {
        // Simple fetch for country code
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                if (data && data.country_code) {
                    setCountry(data.country_code);
                }
            })
            .catch(err => console.error("Error fetching country:", err));
    }, []);

    return (
        <div className={`smart-phone-input ${className}`}>
            <PhoneInput
                international
                defaultCountry={country}
                value={value}
                onChange={onChange}
                className="flex bg-white/5 border border-white/10 rounded-sm focus-within:border-yellow-500 transition-colors"
                numberInputProps={{
                    className: "flex-1 bg-transparent px-4 py-3 text-white placeholder-gray-600 focus:outline-none",
                    placeholder: "Phone Number"
                }}
            />
        </div>
    );
};
