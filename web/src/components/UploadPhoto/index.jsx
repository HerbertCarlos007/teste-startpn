import React, {useState} from "react";
import * as C from './styles'
import photo from '../../assets/photo.png'
import { BiCamera } from 'react-icons/bi'
import api from "../../services/api";

export const UploadPhoto = () => {
    return (
        <C.ContainerPhotoOutsider>
            <C.PhotoOutsider src={photo} />
            <C.ContainerUploadPhoto>
                <C.IconUpload><BiCamera /></C.IconUpload>
            </C.ContainerUploadPhoto>
        </C.ContainerPhotoOutsider>
    )
}