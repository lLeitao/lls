import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi'
import Contador from './componentes/Contador'

export default createDrawerNavigator({
    Contador: {
        screen: () => <Contador />
    },
    MegaSena: {
        screen: () => <MegaSena numeros={6} />,
        navigationOptions: { title: "MegaSena" }
    },
    Inverter: {
        screen: () => <Inverter texto="React Nativo!" />
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: { title: "Par ou Impar" }
    },
    Simples: {
        screen: () => <Simples texto="Flex" />
    }
}, { drawerWidth: 300});