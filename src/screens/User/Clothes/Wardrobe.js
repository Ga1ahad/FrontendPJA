import React, { useState, useEffect } from "react";
import ReactTable from '../../ReactTable';
import UserService from "../../Auth/services/user.service"
import authService from "../../Auth/services/auth.service"

const columns = [
  { id: 'url', label: '' },
  { id: 'name', label: 'Nazwa' },
  { id: 'clothingTypeName', label: 'Typ' },
  { id: 'tags', label: 'Tagi' },
];

const siteName = 'SZAFA'
const url = 'clothing'
const id_name = 'idClothing'
const site_url = 'clothes'

const Wardrobe = (log) => {
  const isLoggedIn = authService.isLoggedIn();
  if (!isLoggedIn) {
    log.history.push("/login");
  }
  const [content, setContent] = useState([]);
  useEffect(() => {
    UserService.getClothes().then(
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

export default Wardrobe;
