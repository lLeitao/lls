import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'

import Categoria from './Categoria'
import Header from './Header'

class Categorias extends Component {
    render() {
        return (
            <div>
                <Header />
                <h2>Lista de categorias</h2>
                <p>
                    Selecione a categoria de perguntas que você quer responder.
                </p>
            
                <Grid columns={5}>
                    <Categoria titulo="Esportes" icone="futbol outline" />
                    <Categoria titulo="Música" icone="music" />
                    <Categoria titulo="Mundo" icone="globe" />
                    <Categoria titulo="Animais" icone="paw" />
                    <Categoria titulo="Brincadeiras" icone="puzzle piece" />
                    <Categoria titulo="Fórmula 1" icone="trophy" />
                    <Categoria titulo="Profissões" icone="user md" />
                </Grid>
            </div>
        )
    }
}

export default Categorias