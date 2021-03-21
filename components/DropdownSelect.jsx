import React, { useState } from 'react'
import Select from 'react-select';

// const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
// ];

export default function DropdownSelect({
    options,
    onChange,
    value,
    isMulti,
    label,
    disabled
}) {

    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = e => {
        setSelectedOption(e)
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <div className="form-group">
            <label>{label}</label>
            <Select
            isDisabled={disabled}
                value={value}
                onChange={onChange}
                options={options}
                isMulti={isMulti}
            />
        </div>
    )
}
