import React, { useState } from 'react';

const Mobile = () => {
    return (
        <div>
            <h2>This is mobile</h2>
            <Count></Count>
        </div>
    );
};

function Count(props){
    const [counts, setCounts] = useState(100)
    if(counts === 0){
        // alert('Please stop the coundown')
        setCounts(0);
    }
    // else{
    //     setCounts(counts)
    // }
    return(
        <div>
            <h2>Battary</h2>
            <button onClick={() => setCounts((counts) => counts - 10)}>button</button>
            count is {counts}
        </div>
    )
}

export default Mobile;