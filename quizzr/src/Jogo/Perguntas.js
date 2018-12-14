import React from 'react'
import {Grid, Radio, Button, Message} from 'semantic-ui-react'

import Header from './Header'

const Perguntas = props => {
    return (
        <div>
            <Header />

            <h2>Perguntas sobre profissões</h2>
            <p>Mostre que você conhece tudo sobre isso!</p>

            <span>
                <h3>PERGUNTA: Pergunta teste que estou testando aqui é?</h3>
                <Grid columns={2}>
                    <Grid.Row>
                        <Grid.Column>
                            <Message color="orange">
                                <p>Alternativa 1</p>
                                <Radio toggle />
                            </Message>
                            
                        </Grid.Column>

                        <Grid.Column>
                            <Message color="teal">
                                <p>Alternativa 2</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <Message color="pink">
                                <p>Alternativa 1</p>
                                <Radio toggle />
                            </Message>
                            
                        </Grid.Column>

                        <Grid.Column>
                            <Message color="yellow">
                                <p>Alternativa 2</p>
                                <Radio toggle />
                            </Message>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Button>Finalizar</Button>
            </span>
        </div>
        
    )
}

export default Perguntas