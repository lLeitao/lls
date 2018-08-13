import React from 'react'
import {Menu, Dropdown} from 'semantic-ui-react'

const Header = props => {
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">Quizzr</h1>

                <Menu>
                    <Menu.Item><strong>Quizzr</strong></Menu.Item>

                    <Menu.Menu position='right'>
                        <Dropdown item text="Acesse aqui">
                            <Dropdown.Menu>
                                <Dropdown.Item>Facebook</Dropdown.Item>
                                <Dropdown.Item>Twitter</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>
                </Menu>
            </header>
        </div>
    )
}

export default Header