const addBtn = document.getElementById('add-btn');
const rowsContainer = document.getElementById('rows-container');

let count = 0;

const addRow = () => {
    const row = document.createElement('div');

    switch (count) {
        case 0:
            row.className = 'row blue';
            break;
        case 1:
            row.className = 'row red';
            break;
        default:
            row.className = 'row yellow';
    }

    count = count === 2 ? 0 : count + 1;
    rowsContainer.appendChild(row);
};

addBtn.addEventListener('click', addRow);
