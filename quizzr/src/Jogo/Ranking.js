import React, {Component} from 'react'
import {Container, List, Image} from 'semantic-ui-react'

class Ranking extends Component {
    render() {
        return (
            <div>
                <h2>Ranking</h2>
                <p>Quem é o mestre ???</p>
                
                <Container>
                    <List divided verticalAlign='left'>
                        <List.Item>
                            <List.Content floated="left">
                                <Image avatar src=""></Image>
                                Leitão
                            </List.Content>
                            <List.Content floated="right">
                                500 pontos
                            </List.Content>
                        </List.Item>
                    </List>
                </Container>
            </div>
        )
    }
}

export default Ranking