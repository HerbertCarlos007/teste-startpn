import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { GrGroup } from 'react-icons/gr'
import { RxGear } from 'react-icons/rx'
import { BsChatSquareText } from 'react-icons/bs'
import { VscAccount } from 'react-icons/vsc'
import logo from '../../assets/logo.png'

import * as C from './styles'
 

export const SideBar = () => {
    return (
        <Sidebar  backgroundColor='#fff' style=
            {{
                height: '100vh',
                border: '1px solid #D7D7D7',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'row'
            }}
        >
            <C.Logo src={logo}/>
            <Menu >
                <MenuItem icon={<GrGroup/>}>Terceiros</MenuItem>
                <MenuItem icon={<BsChatSquareText/>}> Exemplo </MenuItem>
                <MenuItem icon={<BsChatSquareText/>}> Exemplo </MenuItem>
                <MenuItem icon={<RxGear/>}> Exemplo </MenuItem>
                <MenuItem icon={<VscAccount/>}> Minha conta </MenuItem>
            </Menu>
        </Sidebar>
    );
}