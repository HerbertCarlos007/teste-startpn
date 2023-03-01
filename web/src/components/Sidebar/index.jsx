import React from 'react';
import {useNavigate} from 'react-router-dom'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { GrGroup } from 'react-icons/gr'
import { RxGear } from 'react-icons/rx'
import { BsChatSquareText } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import { RxExit } from 'react-icons/rx'
import logo from '../../assets/logo.png'
import * as C from './styles'

export const SideBar = () => {

    const navigate = useNavigate()

    const navigateToAccount = () => {
        navigate('/account')
    }

    const navigateToOutsiders = () => {
        navigate('/outsiders')
    }

    return (
        <Sidebar backgroundColor='#fff'
            style=
            {{
                height: '100%',
                border: '1px solid #D7D7D7',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'row',
                position: 'relative'
            }}
        >
            <C.Logo src={logo} />
            <Menu style={{marginTop: '60px'}}>
                <MenuItem icon={<GrGroup />} onClick={navigateToOutsiders}>Terceiros</MenuItem>
                <MenuItem icon={<BsChatSquareText />}> Exemplo </MenuItem>
                <MenuItem icon={<BsChatSquareText />}> Exemplo </MenuItem>
                <MenuItem icon={<RxGear />}> Exemplo </MenuItem>
                <MenuItem icon={<VscAccount />} onClick={navigateToAccount}> Minha conta </MenuItem>
                <MenuItem icon={<RxExit />} style={{marginTop: '150px'}} onClick={navigateToAccount}> Sair </MenuItem>
            </Menu>
        </Sidebar>
    );
}