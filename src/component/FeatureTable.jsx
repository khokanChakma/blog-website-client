import React from 'react';
import DataTable from 'react-data-table-component';

const FeatureTable = ({sortedData}) => {
    const columns = [
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'Posted Date',
            selector: row => row.posted_Date,
            sortable: true,
        },
    ]
    const data = sortedData
    return (
        <div className='my-6'>
            <DataTable columns={columns} data={data}></DataTable>
        </div>
    );
};

export default FeatureTable;