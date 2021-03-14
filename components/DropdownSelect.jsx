import React, { useState } from 'react'
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function DropdownSelect() {

    const [selectedOption, setSelectedOption] = useState(null)

    const handleChange = e => {
        setSelectedOption(e)
        console.log(`Option selected:`, selectedOption);
    };

    return (
        <div className="form-group">
            <label>Leave a Reply</label>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    )
}
