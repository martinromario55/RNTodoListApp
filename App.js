import { StatusBar } from 'expo-status-bar'
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Colors from './src/utilities/Colors'
import tempData from './tempData'
import TodoList from './src/components/TodoList'
import React from 'react'

export default class App extends React.Component {
  state = {
    addTodoVisible: false,
  }

  toggleAddTodoModal() {
    this.setState({
      addTodoVisible: !this.state.addTodoVisible,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Modal animationType="slide">
          <View>
            <Text>Modal</Text>
          </View>
        </Modal> */}
        <View style={styles.rowView}>
          <View style={styles.divider} />
          <Text style={styles.titleText}>
            Todo <Text style={styles.colorText}>Lists</Text>
          </Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.addBtnView}>
          <TouchableOpacity style={styles.addList}>
            <Feather name="plus" size={16} color={Colors.blue} />
          </TouchableOpacity>
          <Text style={styles.addListText}>Add List</Text>
        </View>

        <View style={styles.listView}>
          <FlatList
            data={tempData}
            keyExtractor={item => item.name}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <TodoList list={item} />}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowView: {
    flexDirection: 'row',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.lightblue,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 38,
    fontWeight: '800',
    color: Colors.black,
    paddingHorizontal: 64,
  },
  colorText: {
    color: Colors.blue,
    fontWeight: '300',
  },
  addBtnView: {
    marginVertical: 48,
  },
  addList: {
    borderWidth: 2,
    borderColor: Colors.lightblue,
    borderRadius: 4,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addListText: {
    color: Colors.blue,
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
  },
  listView: {
    height: 275,
    paddingLeft: 32,
  },
})
