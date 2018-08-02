import React from 'react'
import { Container, Header, Segment, Card, Button } from 'semantic-ui-react'

const Inicio = props => {
    return (
        <div>
            <Container>
                <Segment>Quizzr</Segment>
                <Header as='h2'>Jogo de perguntas e respostas</Header>
                <p>
                    Desafie seus amigos neste incrível jogo de perguntas e respostas.
                </p>

                <Card fluid>
                    <Card.Content>
                        Acesse agora mesmo
                    </Card.Content>
                    <Card.Content>
                        <Button basic color='blue'>Login com Facebook</Button>
                        <Button basic color='green'>Administrador</Button>
                    </Card.Content>
                </Card>
            </Container>
        </div>
    )


}

export default Inicio