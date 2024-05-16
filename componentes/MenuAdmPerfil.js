import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable, Modal, Button } from 'react-native';
import CadFunc from './CadFunc';
import ListFunc from './ListFunc';
import AddCar from './AddCar';


export default function MenuAdmPerfil({route}){

   const [modalCad, setModalCad] = useState(false);
   const [modalFun, setModalFun] = useState(false);
   const [modalAddCar, setModalAC] = useState(false);
   const [modalSearchCar, setModalSC] = useState(false);

    return(
      <View>
        <Pressable onPress={() => (setModalFun(true))}>
          <Text>Funcionarios</Text>
        </Pressable>

        <Modal visible={modalFun}>
          <ListFunc/>
          <Button title='Sair' onPress={()=>(setModalFun(false))}/>
        </Modal>

        <Pressable onPress={() => (setModalCad(true))}>
          <Text>Cadastrar Funcionarios</Text>
        </Pressable>

        <Modal visible={modalCad}>
          <CadFunc/>
          <Button title='Sair' onPress={() => (setModalCad(false))}/>
        </Modal>

        <Pressable onPress={() => (setModalAC(true))}>
          <Text>Adicionar Carros</Text>
        </Pressable>

        <Modal visible={modalAddCar}>
          <AddCar/>
          <Button title='Sair' onPress={()=>(setModalAC(false))}/>
        </Modal>

        <Pressable onPress={() => (setModalSC(true))}>
          <Text>Procurar Carros</Text>
        </Pressable>

        <Modal visible={modalSearchCar}>
          <SearchCar/>
          <Button title='Sair' onPress={()=>(setModalSC(false))}/>
        </Modal>

        <TouchableOpacity onPress={()=>route.params.funcLogarB(false)}>
            <Text>Sair</Text>
        </TouchableOpacity>

      </View>
    );
}