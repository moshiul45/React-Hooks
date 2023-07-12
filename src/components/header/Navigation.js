import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function Navigation(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args}>
        <div>
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        </div>
        <div>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  All React Hooks
                </DropdownToggle>
                <DropdownMenu end>
                  <DropdownItem>
                    <NavLink href="/use-state">UseState</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-reducer">UseReducer</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-effect">UseEffect</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-ref">UseRef</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-layoutEffect">UseLayoutEffect</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-imperativeHandle">
                      UseImperativeHandle
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-context">UseContext</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-memo">UseMemo</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/use-callBack">UseCallback</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
