import React from "react";
import {Link} from 'react-router-dom';


const bookTerm = (props) => {
    return (
        <tr key={props.term.id}>
            <td scope={"col"}>{props.term.name}</td>
            <td scope={"col"}>{props.term.category}</td>
            <td scope={"col"}>{props.term.author.name} {props.term.author.surname}</td>
            <td scope={"col"}>{props.term.availableCopies}</td>
            <td scope={"col"} className={"text-end"}>
                <a title={"Mark as Taken"} className={"btn btn-secondary me-1"}
                   onClick={() => props.onGet(props.term.id)}>Mark as Taken</a>
                <a title={"Return Copy"} className={"btn btn-secondary me-1"}
                   onClick={() => props.onReturn(props.term.id)}>Return Copy</a>
                <a title={"Delete"} className={"btn btn-danger me-1"}
                   onClick={() => props.onDelete(props.term.id)}>Delete</a>
                <Link className={"btn btn-primary ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
            </td>
        </tr>
    );
}

export default bookTerm;
