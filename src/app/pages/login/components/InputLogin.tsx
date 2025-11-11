import React from 'react';

interface InputLoginProps {
    label: string;
    value: string;
    type: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
    
export const InputLogin = React.forwardRef<HTMLInputElement, InputLoginProps>((props,ref) => {
    return (
        <label>
            <span>{props.label}</span>
            
            <input ref={ref} type={props.type} value={props.value} onChange={props.onChange} onKeyPress={props.onPressEnter} />
            
        </label>
    );
});