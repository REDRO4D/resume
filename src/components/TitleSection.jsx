import React, { Fragment } from "react";

const TitleSection = props => {
    return (
        <Fragment>
            <div className="title-wrapper">
                {props.children}
            </div>
        </Fragment>
    );
};

export default TitleSection;