import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color:#E5E5E5;
    height: 100vh;

    @media only screen and (max-width: 574px) {
        background-color: #FFFF;
        overflow-y: hidden;
        overflow-x: hidden;
    }
     
`

export const ContainerAllContent = styled.div`
    display: flex;
    flex-direction: column;
    
`

export const SidebarContainer = styled.div`
    
`

export const ContentContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

`




export const ContainerOptions = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    align-items: center;
    height: 100px;
    margin-top: 80px;
    position: relative;
    right: 150px;

    @media only screen and (max-width: 574px) {
        display: none;
    }
`

export const LeftSection = styled.div`
    display: flex;
    position: relative;
    left: 150px;

`

export const RightSection = styled.div`
     position: relative;
     right: 65px;
`
export const ContainerCustomersAndSuppliers = styled.div`
    width: 250px;
    height: 45px;
    background-color: #FFF;
    border: 1px solid #D7D7D7;
    border-radius: 17px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-items: center;
    gap: 40px;
    
    
`

export const Input = styled.input`
    width: 290px;
    height: 45px;
    background-color: #FFF;
    border: 1px solid #D7D7D7;
    border-radius: 60px;
    text-align: center;
`

export const TextCostumers = styled.span`
    cursor: pointer;
    color: #476EE6;
`

export const TextSuppliers = styled.span`
    margin-left: 30px;
    color: #476EE6;
    cursor: pointer;
`

export const IconSearch = styled.div`
    position: relative;
    left: 45px;
    font-size: 30px;
`

export const ContainerGear = styled.div`
    width: 45px;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    cursor: pointer;
`
export const IconGear = styled.div`
`

export const ButtonNewOutsider = styled.button`
    background-color: #476EE6;
    border-radius: 60px;
    color: #fff;
    width: 176px;
    height: 45px;
    border: 1px solid #476EE6;
    cursor: pointer;
`

export const ModalContainerNewOutsider = styled.div`
    
`
export const TopSectionModalNewOutsider = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 605px;
`

export const LeftSideNewOutsider = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    gap: 15px;
`

export const IconClose = styled.div`
    font-size: 30px;
    cursor: pointer;
`

export const TextTitleModal = styled.span`
    font-size: 18px;
    font-weight: 600;
`

export const Line = styled.div`
    width: 605px;
    height: 2px;
    background-color: #D7D7D7;
    margin-top: 8px;

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    flex-wrap: wrap;
`
export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
    flex-direction: row;
    gap: 30px;
    margin-top: 10px;
`

export const LabelForm = styled.label`
    font-size: 16px;
    font-weight: 500;
`

export const InputNewOutsider = styled.input`
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

export const ModalContainerConfiguration = styled.div`
`

export const ContainerFormConfiguration = styled.div`
    margin-top: 10px;
`

export const TextFieldsForm = styled.span`
    font-size: 17px;
    font-weight: 600;
    position: relative;
    left: 10px;
    top: 10px;
    
`

export const ContainerInputsConfiguration = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const LabelFormConfiguration = styled.label`
    margin-right: 127px;
    margin-top: 10px;
`

export const InputsConfiguration = styled.input`
    width: 268px;
    height: 45px;
    background-color: #FFFFFF;
    border: 1px solid #D7D7D7;
    border-radius: 7px;
    margin-top: 10px;
    padding-left: 10px;
`


export const Box = styled.div`
    background: #476EE6;
    border-radius: 60px;
    width: 34px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
`

export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
`
export const Checkbox = styled.input`
    
`

export const TextIsRequired = styled.span`
    margin-left: 20px;
`

export const ContainerCheckbox = styled.div`
    margin-top: 10px;
    margin-left: 20px;
    
`

export const IconTrash = styled.div`
    font-size: 25px;
    cursor: pointer;
`

export const TextAddNewField = styled.span`
    display: flex;
    align-items: center;
`

export const IconPlus = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #476EE6;
    cursor: pointer;
    margin-top: 20px;
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

