import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";

const renderItemTask = ({item, onPressTask}) => {
  return (
        <Pressable onPress={() => onPressTask(item)}>
            <View style={styles.task} key={item.id}>
               <Text style={styles.taskText}>{item.task}</Text>
            </View>
        </Pressable>
      
  )
}

const MainScreen = () => {

  const [list, setList] = useState([])
  const [input, setInput] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [tasActive, setTaskActive] = useState({})

  const onAddTask = () => {
      console.log("Se agregó una task");
      setList([
          ...list,
          {
              id: list.length + 1,
              task: input,
              completed: false
          }
      ])
  }
  const onPressTask = (task) => {
    console.log(task)
    setTaskActive(task)
    setModalVisible(!modalVisible)
 }
 const onPressHecho = () => {

 }
 
 const onPressIncompleto = () => {
    
 }

  console.log(list);

  return (
      <View style={styles.container}>
          <View style={styles.view1}>
              <TextInput
                  placeholder="Escribe una tarea" 
                  style={styles.input}
                  value={input}
                  onChangeText={setInput} 
              />
              <TouchableOpacity 
                  style={styles.button}
                  onPress={onAddTask}
              >
                  <Text style={styles.buttonText}>Agregar</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.view2}>
              <FlatList
                  data = {list}
                  keyExtractor={task => task.id}
                  renderItem={({item})=> renderItemTask({item,onPressTask})}
              />
            
              
          </View>

          <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                  setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                  <View style={styles.modalView}>
                      <Text style={styles.modalText}>{tasActive.task}</Text>
                      <View style={styles.buttonContainer}>
                        <Pressable
                         style={[styles.button, styles.buttonHecho]}
                         onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Hecho</Text>
                        </Pressable>
                        <Pressable
                         style={[styles.button, styles.buttonIncompleto]}
                         onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Incompleto</Text>
                        </Pressable>
                        <Pressable
                         style={[styles.button, styles.buttonCancelar]}
                         onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>
                      </View>
                     
                  </View>
              </View>
          </Modal>
      </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  },
  view1: {
      height: "20%",
      flexDirection: "row",
      paddingHorizontal: 10,
      paddingBottom: 10,
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "#9BCDD2",
      width: "100%",
  },
  view2: {
      height: "88%",
      backgroundColor: "#E3F4F4",
      width: "100%",
      justifyContent: "flex-start",
      alignItems: "center",
      paddingVertical: 15,
  },
  input: {
      width: 250,
      height: 35,
      borderBottomColor: "deepskyblue",
      borderBottomWidth: 3,
      color: "gray",
      fontSize: 20,
  },
  button: {
      height: 35,
      width: 90,
      paddingVertical: 10,
      paddingHorizontal: 50,
      borderRadius: 5,
  },
  buttonText: {
      fontSize: 16,
      textAlign: "center",
  },
  task: {
      width: 200,
      backgroundColor: "azure",
      padding: 10,
      backgroundColor: "mediumpurple",
      borderRadius: 6,
      borderColor: "#000",
      borderBottomWidth: 3,
      borderRightWidth: 3,
      marginBottom: 15,
  },
  taskText: {
      fontSize: 20,
  },
  centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
  },
  buttonContainer: {
    flexDirection: row,
    alignItems: center,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  },
  button: {
  borderRadius: 20,
  padding: 10,
  elevation: 2,
  },
  buttonOpen: {
  backgroundColor: '#F194FF',
  },
  buttonHecho: {
    backgroundColor: 'green',
  },
  buttonIncompleto: {
     backgroundColor: 'red',
  },
  buttonClose: {
  backgroundColor: '#2196F3',
  },
  textStyle: {
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  },
  modalText: {
  marginBottom: 15,
  textAlign: 'center',
  },
});