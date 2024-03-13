import React, { useEffect, useState } from 'react';
import { GROCER_ITEM_LISTING, LOC_VARIABLE } from './constant';

function useGrocerydata(newid) {
    const [data, setData] = useState();

    useEffect(() => {
        fetchData();
    }, [newid]);

    async function fetchData() {
        try {
            const response = await fetch(GROCER_ITEM_LISTING + newid + LOC_VARIABLE);
            const json_data = await response.json();
            setData(json_data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <div>
            {/* Render your data here if needed */}
        </div>
    );
}

export default useGrocerydata;
