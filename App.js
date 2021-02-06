
import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import logo from './assets/icon.png';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';


export class App extends Component {
  state = {
    u_name: '',
    pass: ''
  }

  login = () => {
    alert(this.state.u_name)
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('./assets/lago.jpeg')}//can be use logo vilable
            style={{
              width: 150,
              height: 150,
            }}
          />

          <View style={styles.input}>
            <Input

              label='Your Email'
              placeholder='name@company.com'
              placeholderTextColor='grey'

              leftIcon={
                <Icon
                  name='user'
                  size={24}
                  color='grey'

                />


              }
              onChangeText={
                (text) => this.setState({ u_name: text })
              }
            />

            <Input
              secureTextEntry={true}
              label='Your password'
              placeholder='Password'
              placeholderTextColor='grey'
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='grey'

                />
              }

            />
          </View>



          <View style={{
            width: 300,
            paddingBottom: 10,

          }}>
            <Button
              style={
                {
                  borderRadius: 20
                }
              }
              title="Login"
              onPress={this.login}

            />
          </View>

          <Text style={{
            color: 'blue'
          }}>
            Register
        </Text>


        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100
  },
  input: {
    paddingTop: 20,
    width: 300
  }
})
export default App
