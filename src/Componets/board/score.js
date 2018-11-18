import React from 'react';

const Score = (props) => (
<div className="score-keeper">
    <p>Current Score: <span id='score'>{props.score}</span></p>
</div>
);

export default Score;