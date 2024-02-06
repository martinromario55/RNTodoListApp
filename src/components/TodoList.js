import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../utilities/Colors'

const TodoList = ({ list }) => {
  const completedCount = list.todos.filter(todo => todo.completed).length
  const remainingCount = list.todos.length - completedCount
  const { name } = list
  const {
    listContainer,
    listTitle,
    listCompleteView,
    listSubTitle,
    listCount,
  } = styles
  return (
    <View style={[listContainer, { backgroundColor: list.color }]}>
      <Text style={listTitle}>{name}</Text>

      <View>
        <View style={listCompleteView}>
          <Text style={listCount}>{remainingCount}</Text>
          <Text style={listSubTitle}>Remaining</Text>
        </View>
        <View style={listCompleteView}>
          <Text style={listCount}>{completedCount}</Text>
          <Text style={listSubTitle}>Completed</Text>
        </View>
      </View>
    </View>
  )
}

export default TodoList

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
