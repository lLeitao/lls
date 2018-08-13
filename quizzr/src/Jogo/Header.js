import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Image} from 'semantic-ui-react'

const Header = props => {
    return (
        <div>
            <header className="App-header">
                <h1 className="App-title">Quizzr</h1>

                <Menu>
                    <Menu.Item><strong>Quizzr</strong></Menu.Item>
                    <Menu.Item as={Link} to='/'>Home</Menu.Item>
                    <Menu.Item as={Link} to='/categorias'>Categorias</Menu.Item>
                    <Menu.Item as={Link} to='/perguntas'>Perguntas</Menu.Item>
                    <Menu.Item as={Link} to='/ranking'>Ranking</Menu.Item>
                    <Menu.Menu position='right'>
                        
                        <Menu.Item>
                            <Image avatar source='' />
                            Leitão
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </header>

            
        </div>
    )
}

export default Header