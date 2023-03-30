import React, { useRef, useEffect, useState, forwardRef } from 'react'

export const ThreeStateCheckbox = forwardRef((props, ref) => {
    const { checked, onChange, ...otherProps } = props
    const checkRef = useRef();
    const [currentState, setState] = useState((((checked === true || checked === 'true') && checked !== '') ? 1 : (((checked === false || checked === 'false') && checked !== '') ? 0 : -1)));

    //EMPTY_STATE = -1;
    //UNCHECKED_STATE = 0;
    //CHECKED_STATE = 1;

    useEffect(() => {
        (ref || checkRef).current.checked = (currentState === 1);
        (ref || checkRef).current.indeterminate = (currentState === -1);
    }, [currentState])

    return (
        <input
            type="checkbox"
            ref={(ref || checkRef)}
            checked={currentState === 1}
            {...otherProps}
            onChange={(event) => {
                if (currentState === -1) {
                    setState(1);
                    onChange(true);
                } else if (currentState === 1) {
                    setState(0);
                    onChange(false);
                } else if (currentState === 0) {
                    setState(-1);
                    onChange('');
                }
            }}
        />
    )

});