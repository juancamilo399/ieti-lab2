import React from 'react'

export const Todo = ({text,priority,dueDate}) => {
    return (
        <div>

            <tr>
                <td>{text}</td>
                <td>{priority}</td>
                <td>{dueDate.format('DD-MM-YYYY')}</td>
            </tr>
            
        </div>
    )
}
