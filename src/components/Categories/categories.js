import React from "react"

const categories = (props) => {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"table-responsive"}>
                    <br/>
                    <table className={"table table-secondary table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Genre</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.categories.map((term) => {
                                return (
                                    <tr key={term}>
                                        <td>{term}</td>
                                    </tr>
                                )
                            }
                        )}
                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
}

export default categories;