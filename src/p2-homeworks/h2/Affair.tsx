import React from 'react'
import affairs from './Affairs';

type AffairPropsType = {
    // key не нужно типизировать
    affair: {
        _id: number
        name: string
        priority: string
    } // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>

            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
