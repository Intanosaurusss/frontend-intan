import { useState } from 'react';

const ToggleComponent = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleButton = () => {
        setIsChecked(!isChecked);
    };

    const toggleColor = isChecked ? 'bg-green-500' : 'bg-red-500';

    return (
        <div className="flex items-center justify-center mt-0">
            <label htmlFor="toggle" className={`relative ${toggleColor} w-12 h-6 rounded-full flex items-center`}>
                <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    checked={isChecked}
                    onChange={toggleButton}
                />
                <div 
                    className="w-5 h-5 bg-white rounded-full shadow-md transition-transform transform"
                    style={{ 
                        transform: isChecked ? 'translateX(calc(100% - 1.25rem))' : 'translateX(0)',
                        marginLeft: isChecked ? 'auto' : '0', // Set margin left to auto when toggle is active
                        marginRight: isChecked ? '0' : 'auto' // Set margin right to auto when toggle is inactive
                    }}
                ></div>
            </label>
        </div>
    );
};

export default ToggleComponent;
