import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Simples from './componentes/Simples';

export default class App extends Component {
    render() {
        return(
            <View>
                <Simples texto="Flexível!!!" />
            </View>
        );
    }
}
