import React from "react";

export default function GenericHeader({ title, page }) {
    return (
        <div className="centerAbout container">
            <h2>{title}</h2>
            <div className="textAbout">Home &#10132; {page}</div>
        </div>
    );
}
