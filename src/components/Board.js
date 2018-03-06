import React from 'react';
import List from './List';

const Board = () => (
    <div className="board">
        <List status='TimeReports'>
            Time Reports
        </List>
        <List status='Statistics'>
            Statistics
        </List>
    </div>
);

export default Board;
