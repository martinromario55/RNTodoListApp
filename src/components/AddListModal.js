import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Colors from '../utilities/Colors'
import tempData from '../../tempData'

export default class AddListModal extends React.Component {
  backgroundColors = [
    '#5cd859',
    '#24a6d9',
    '#595bd9',
    '#3022d9',
    '#d159d8',
    '#d85963',
    '#d88559',
  ]

  state = {
    name: '',
    color: this.backgroundColors[0],
  }

  createTodo = () => {
    const { name, color } = this.state

    list = { name, color }

    this.props.addList(list)

    this.setState({ name: '' })
    this.props.closeModal()
  }

  renderColors() {
    return this.backgroundColors.map((color, index) => {
      return (
        <TouchableOpacity
          key={index}
          style={[styles.colorSelect, { backgroundColor: color }]}
          onPress={() => this.setState({ color })}
        />
      )
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <TouchableOpacity
          style={{ position: 'absolute', top: 64, right: 32 }}
          onPress={this.props.closeModal}
        >
          <Feather name="x" size={24} color={Colors.blue} />
        </TouchableOpacity>

        <View style={{ alignSelf: 'stretch', marginHorizontal: 32 }}>
          <Text style={styles.title}>Create Todo List</Text>

          <TextInput
            style={styles.input}
            placeholder="List Name"
            onChangeText={text => this.setState({ name: text })}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12,
            }}
          >
            {this.renderColors()}
          </View>

          <TouchableOpacity
            style={[styles.create, { backgroundColor: this.state.color }]}
            onPress={this.createTodo}
          >
            <Text style={{ color: Colors.white, fontWeight: '600' }}>
              Create
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
    alignSelf: 'center',
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.blue,
    borderRadius: 6,
    height: 58,
    marginTop: 8,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  create: {
    marginTop: 8,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorSelect: {
    width: 30,
    height: 30,
    borderRadius: 4,
  },
})
