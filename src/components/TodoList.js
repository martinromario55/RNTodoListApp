import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../utilities/Colors'
import TodoModal from './TodoModal'

export default class TodoList extends React.Component {
  state = {
    showListVisible: false,
  }

  toggleListModal() {
    this.setState({
      showListVisible: !this.state.showListVisible,
    })
  }

  render() {
    const list = this.props.list
    const completedCount = list.todos.filter(todo => todo.completed).length
    const remainingCount = list.todos.length - completedCount

    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toggleListModal()}
        >
          <TodoModal
            list={list}
            closeModal={() => this.toggleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
          onPress={() => this.toggleListModal()}
        >
          <Text style={styles.listTitle}>{list.name}</Text>

          <View>
            <View style={styles.listCompleteView}>
              <Text style={styles.listCount}>{remainingCount}</Text>
              <Text style={styles.listSubTitle}>Remaining</Text>
            </View>
            <View style={styles.listCompleteView}>
              <Text style={styles.listCount}>{completedCount}</Text>
              <Text style={styles.listSubTitle}>Completed</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    alignItems: 'center',
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: Colors.white,
    marginBottom: 18,
  },
  listCompleteView: {
    alignItems: 'center',
  },
  listCount: {
    fontSize: 48,
    fontWeight: '200',
    color: Colors.white,
  },
  listSubTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.white,
  },
})
