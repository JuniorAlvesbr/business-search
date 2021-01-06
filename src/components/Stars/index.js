import React, { useState, useEffect } from 'react'
import { StarStyle, Item, Icon } from "./style";

function Stars({ amount }) {
    const amountStar = new Array(parseInt(amount)).fill('');
    const renderStar = amountStar.map(() => (<Item><Icon /></Item>))

    return (
        <StarStyle>
            {renderStar}
        </StarStyle>
    );
};

export default Stars;