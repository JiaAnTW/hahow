import React from 'react';

import { AdderLayout, SquareButton, ValueText } from './style';

function Adder({ value, onAdd, onSub }) {
    return (
        <AdderLayout>
            <SquareButton
                onClick={() => {
                    onAdd(value + 1);
                }}
            >
                +
            </SquareButton>
            <ValueText>{value}</ValueText>
            <SquareButton
                onClick={() => {
                    onSub(value - 1);
                }}
            >
                -
            </SquareButton>
        </AdderLayout>
    );
}

export default Adder;
