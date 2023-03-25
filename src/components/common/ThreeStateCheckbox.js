import React, { useRef, useEffect, useState } from 'react'

export const ThreeStateCheckbox = (props) => {
    const { checked, onClick, ...otherProps } = props
    const checkRef = useRef();

    const [currentState, setState] = useState(2);

    const UNCHECKED_STATE = 0;
    const CHECKED_STATE = 1;
    const EMPTY_STATE = 2;

    useEffect(() => {
        if (checked === '' || checked === null) {
            checkRef.current.checked = null;
            checkRef.current.indeterminate = true;
        } else if (checked === true) {
            checkRef.current.checked = true;
            checkRef.current.indeterminate = false;
        } else if (checked === false) {
            checkRef.current.checked = false;
            checkRef.current.indeterminate = false;
        }
    }, [checked])

    return (
        <input
            type="checkbox"
            ref={checkRef}
            {...otherProps}
            checked={checked === 'true' || checked === true}
            onClick={(event) => {
                if (currentState === EMPTY_STATE && event.target.checked === true) {
                    event.target.indeterminate = false;
                    setState(1);
                } else if (currentState === CHECKED_STATE && event.target.checked === false) {
                    event.target.indeterminate = false;
                    setState(0);
                } else if (currentState === UNCHECKED_STATE && event.target.checked === true) {
                    event.target.checked = null;
                    event.target.indeterminate = true;
                    setState(2);
                }

                if (onClick) {
                    onClick(event);
                }
            }}
        />
    )

}