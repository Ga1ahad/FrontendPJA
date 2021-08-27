import React, { useState, useEffect } from "react";
import ReactTable from '../../ReactTable';
import UserService from "../../Auth/services/user.service"
import authService from "../../Auth/services/auth.service"

const columns = [
    { id: 'url', label: '' },
    { id: 'name', label: 'Nazwa' },
    { id: 'clothingTypeName', label: 'Typ' },
];

const siteName = 'WALIZKA'
const url = 'suitcase'
const id_name = 'idSuitcase'
const site_url = 'suitcase'

const Suitcase = ({ history, match }) => {
    const isLoggedIn = authService.isLoggedIn();
    const { id } = match.params;
    if (!isLoggedIn) {
        history.push("/login");
    }
    const [content, setContent] = useState([]);
    useEffect(() => {
        UserService.getSuitcase(id).then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                // const _content =
                //   (error.response &&
                //     error.response.data &&
                //     error.response.data.message) ||
                //   error.message ||
                //   error.toString();
                // setContent(_content);
            }
        );
    },
        []);

    return (
        <ReactTable siteName={siteName} columns={columns} rows={content} url={url} id_name={id_name} site_url={site_url} />
    );
};

export default Suitcase;
