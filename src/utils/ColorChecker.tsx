import React, { useEffect, useState } from 'react';

interface ColorCheckerProps {
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function ColorChecker({ value, onChange, className }: ColorCheckerProps) {
    const [color, setColor] = useState(value);
    const [isValid, setIsValid] = useState(true);

    useEffect(() => {
        setColor(value);
    }, [value]);

    const isValidColor = (color: string) => {
        const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
        return hexColorRegex.test(color);
    };

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = event.target.value;
        setColor(newColor);
        if (isValidColor(newColor)) {
            onChange(newColor);
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    return (
        <input
            type="text"
            value={color}
            onChange={handleColorChange}
            className={className}
            style={{ backgroundColor: isValid ? 'transparent' : 'red' }}
            maxLength={7}
        />
    );
}