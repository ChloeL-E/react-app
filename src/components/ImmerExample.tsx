//simplify update logic

import { useState } from "react";
import produce from 'immer';

function App (){
    const [bugs, setBugs] = useState ([
        { id: 1, title: 'Bug 1', fixed: false },
        { id: 2, title: 'Bug 2', fixed: false }
    ]);

    //const handleClick = () => {
        //setBugs(bugs.map(bug => bug.id === 1 ? { ...bug, fixed:true } : bug))
    //}; 
    //updates bug 1, without having to update both b1 and b2

    //using immer to simplify the above code. Draft is a proxy object that stores a coy of the bugs array 
    // so we dont need to map or copy this to make cghanges. Immer tracks the changes and rpodcues a copy of the changes

    const handleClick = () => {
        setBugs(produce(draft => {
            const bug = draft.find(bug => bug.id === 1);
            if (bug) bug.fixed = true;
        }))
    }

    return (
        <div>
            {bugs.map(bug => <p key={bug.id}>{bug.title} {bug.fixed ? 'fixed' : 'New'}</p>)}
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}

export default App;