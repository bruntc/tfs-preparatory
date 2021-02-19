import React from "react";
const utilStyles = require("../styles/utils.module.css");

export interface Props {
    formData: FormTitles;
}

interface FormTitles {
    name: string;
    defaultText: string;
}

export const Form: React.FC<Props> = ({ formData }) => {
    return (
        <form>
            <label>{formData.name}</label>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </form>
    );
};