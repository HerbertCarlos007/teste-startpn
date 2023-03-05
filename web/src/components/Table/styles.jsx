import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const HeaderTable = styled.div`
    width: 1165px;
    height: 55px;
    background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    position: relative;
    right: 100px;

    @media (max-width: 1366px) {
        width: 890px;
    }

    @media only screen and (max-width: 574px) {
        display: none;
    }
`

export const ContentHeaderTable = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    position: relative;
    margin-top: 15px;
    @media (max-width: 1366px) {
        position: relative;
        align-items: center;
        padding-left: 20px;
    }
`

export const CheckboxHeader = styled.input`
    position: absolute;
    left: 25px;
    top: 5px;

    @media (max-width: 1366px) {
        position: absolute;
        left: 18px;
        top: 5px;
    }
`

export const ChecboxContainerTable = styled.input`
    position: absolute;
    left:24px;
    top: 19px;

    @media (max-width: 1366px) {
        position: absolute;
        left: 17px;
        top: 4px;
    }
`


export const TableRow = styled.div`
     width: 1165px;
     height: 55px;
     background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    position: relative;
    right: 100px;
    margin-top: 20px;
    @media (max-width: 1366px) {
        width: 890px;
    }

    @media only screen and (max-width: 574px) {
        display: none;
        
    }
`

export const RowContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;

    @media (max-width: 1366px) {
        position: relative;
        justify-content: space-evenly;
        align-items: center;
    }
`


export const ColumnValue = styled.div`
    font-size: 14px;
    color: #101828;
    font-weight: 600;
    width: 200px;

    @media (max-width: 1366px) {
       padding-left: 30px;
    }
`

export const ColumnName = styled.div`
     font-size: 14px;
    color: #6A6A6A;
    font-weight: 500;
    width: 200px;
    
    @media (max-width: 1366px) {
        width: 160px;
    }
`

export const IconMenu = styled.div`
    position: absolute;
    right: 25px;
    cursor: pointer;
`

export const ModalContainer = styled.div`
    

`

export const TopSectionModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
   
`

export const TextTitleModal = styled.span`
    font-size: 18px;
    font-weight: 600;
`

export const IconClose = styled.div`
    font-size: 30px;
    cursor: pointer;
`

export const Line = styled.div`
    width: 375px;
    height: 2px;
    background-color: #D7D7D7;
    margin-top: 15px;

`

export const MidSectionModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 15px;
    padding-bottom: 50px;
`

export const TextEditOutsider = styled.span`
      font-size: 18px;
      color: #030303;
      font-weight: 600;
      cursor: pointer;
`

export const TextDeleteOutsider = styled.span`
    margin-top: 15px;
    font-size: 18px;
    color: #EA0000;
    cursor: pointer;
    font-weight: 600;
`

export const ModalContainerDeleteOutsider = styled.div`
    
`

export const TopSectionModalDeleteOutsider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 375px;
`

export const LeftSideModal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 15px;
`

export const TextModalDeleteOutsider = styled.div`
    width: 82px;
    font-size: 15px;
    font-weight: 600;
    height: 37px;
    background-color: #FFE1E1;
    border-radius: 50px;
    cursor: pointer;
    color: #EA0000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContainerConfirmDelete = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
    padding-bottom: 30px;
`

export const TextConfirmDeleteOutsider = styled.span`

`

export const TextIndent = styled.span`
    text-indent: 10px;
`

export const TextBold = styled.span`
    font-weight: bold;
`

export const ModalContainerEditOutsider = styled.div`
    
`

export const TopSectionModalEditOutsider = styled.div`
    width: 605px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ContainerPhotoOutsider = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`

export const PhotoOutsider = styled.img`
    
`

export const ContainerUploadPhoto = styled.div`
    background: #476EE6;
    width: 28.57px;
    height: 28.79px;
    border-radius: 70px;
    text-align: center;
    position: relative;
    right: 20px;
    top: 60px;
    cursor: pointer;
   
`
export const IconUpload = styled.div`
     border: 2px solid #FFFFFF;
    border-radius: 70px;
    color: white;
`

export const ContainerInputs = styled.div`
    margin-top: 30px;
    padding-bottom: 20px;
`
export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FormInputs = styled.div`
     display: flex;
    flex-direction: column;
`

export const UpFormInputs = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;
`

export const CenterFormInputs = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;
`

export const DownFormInputs = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 10px;
`

export const LabelForm = styled.label`
    font-size: 16px;
    font-weight: 500;
`

export const Input = styled.input`
    width: 265px;
    height: 45px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
`

export const Select = styled.select`
     width: 265px;
    height: 45px;
    border: 1px solid #D7D7D7;
    border-radius: 10px;
    margin-top: 10px;
    padding-left: 10px;
`

export const OptionsSelect = styled.option`
`

export const ButtonActions = styled.button`
    width: 111px;
    height: 33px;
    background-color: #476EE6;
    border: 1px solid #476EE6;
    border-radius: 50px;
    color: #FFF;
    cursor: pointer;
`

export const InputNameDelete = styled.input`
    background-color: white;
    
    margin-left: 10px;
    border: none;
    font-weight: 800;
    color: black;
`

export const AlignInputNameDelete = styled.div`
    margin-left: 150px;
`