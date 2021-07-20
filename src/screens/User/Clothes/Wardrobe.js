import React, { useState, useEffect } from "react";
import ReactTable from '../../ReactTable';
import UserService from "../../Auth/services/user.service"
import authService from "../../Auth/services/auth.service"

const columns = [
  { id: 'url', label: '' },
  { id: 'name', label: 'Nazwa' },
  { id: 'clothingTypeName', label: 'Typ' },
  { id: 'tags', label: 'Tagi' },
  { id: 'idUser', label: 'Data dodania' },
];

const siteName = 'SZAFA'

const url = 'clothes'
const id_name = 'idWardrobe'

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
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        // setContent(_content);

      }
    );
  },
    []);

  return (
    <ReactTable siteName={siteName} columns={columns} rows={content} url={url} id_name={id_name} />
  );
};

export default Wardrobe;
