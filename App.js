import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: '',
      img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Não há que ser forte. Há que ser flexível.',
    ];
  }

  quebraBiscoito() {
    let fraseAleatoria = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[fraseAleatoria],
      img: require('./src/biscoitoAberto.png'),
    });
  }

  render() {
    return (
      <View style={Style.container}>
        <Image style={Style.img} source={this.state.img} />

        <Text style={Style.texto}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={Style.botao} onPress={this.quebraBiscoito}>
          <View style={Style.textoBotao}>
            <Text style={Style.Txt}>Gerar Frase</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  texto: {
    fontSize: 20,
    color: '#dd7b22',
    marginTop: 30,
    fontStyle: 'italic',
    width: '80%',
    textAlign: 'center',
  },
  img: {
    width: 250,
    height: 200,
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
    marginTop: 20,
  },
  textoBotao: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
