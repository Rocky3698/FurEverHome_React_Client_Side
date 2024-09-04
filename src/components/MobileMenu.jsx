import { TiThMenu } from "react-icons/ti";
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
export default function MobileMenu() {
    return (
        <div className="">
            <Menu placement="bottom-end">
                <MenuHandler>
                    <Button><TiThMenu className="text-black"></TiThMenu></Button>
                </MenuHandler>
                <MenuList className="bg-marble w-1/3 m-0 text-start">
                    <MenuItem><NavLink to="/">Home</NavLink></MenuItem>
                    <MenuItem><NavLink to="/pets">Browse Pets</NavLink></MenuItem>
                    <MenuItem><NavLink to="/about">About Us</NavLink></MenuItem>
                    <MenuItem><NavLink to="/contact">Contact Us</NavLink></MenuItem>
                    <MenuItem><NavLink to="/faq">FAQ</NavLink></MenuItem>
                </MenuList>
            </Menu>

        </div>
    );
}
