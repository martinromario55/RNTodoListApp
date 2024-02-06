import { StatusBar } from 'expo-status-bar'
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Feather } from '@expo/vector-icons'
import Colors from './src/utilities/Colors'
import tempData from './tempData'
import TodoList from './src/components/TodoList'

export default function App() {
  const {
    container,
    row,
    divider,
    titleText,
    colorText,
    addBtnView,
    addList,
    addListText,
    listView,
  } = styles
  return (
    <View style={container}>
      <StatusBar style="auto" />

      <View style={row}>
        <View style={divider} />
        <Text style={titleText}>
          Todo <Text style={colorText}>Lists</Text>
        </Text>
        <View style={divider} />
      </View>

      <View style={addBtnView}>
        <TouchableOpacity style={addList}>
          <Feather name="plus" size={16} color={Colors.blue} />
        </TouchableOpacity>
        <Text style={addListText}>Add List</Text>
      </View>

      <View style={listView}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
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
