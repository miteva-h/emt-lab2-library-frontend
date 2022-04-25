import React from "react"

const authors = (props) => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <br/>
                    <table className={"table table-secondary table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.authors.map((term) => {
                                return (
                                    <tr key={term.id}>
                                        <td>{term.name} {term.surname}</td>
                                        <td>{term.country.name}</td>
                                    </tr>
                                );
                            }
                        )}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default authors;