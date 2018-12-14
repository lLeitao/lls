import React, {Component} from 'react'
import {Container, List} from 'semantic-ui-react'

import Usuario from './Usuario'
import Header from './Header'

class Ranking extends Component {
    render() {
        return (
            <div>
                <Header />
                
                <h2>Ranking</h2>
                <p>Quem é o mestre ???</p>
                
                <Container>
                    <List divided verticalAlign='left'>
                        <Usuario foto="" nome="Leitão" pontos="300" />
                        <Usuario foto="" nome="Kobrawsk" pontos="260" />
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking