import { Box, Container, HStack, Heading, Icon, Input, Text, ScrollView, Modal } from 'native-base';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import ContainerVStack from "../../components/ContainerVStack";
import ItemList from '../../components/ItemList';
import ButtonAdd from '../../components/ButtonAdd';
import { useRef, useState } from 'react';
import { List } from "../../data/list";
import ModalAddItem from '../../components/ModalAddItem';

export default function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <>
      <ContainerVStack backgroundColor={'#1b3065'} >
        {/* <Box> */}
        <HStack justifyContent="space-between" pb={2}>
          <Box flexDirection="column" alignItems="flex-start">
            <Text fontWeight={"medium"} fontSize={24} color="#fdfffd">Lista de compras</Text>
            <Text fontWeight={"normal"} fontSize={18} p={0.5} pl={3} pr={3} mt={3} borderRadius={20} bg="#366dfb" color="#fdfffd">Neto Vilela</Text>
          </Box>
          <MaterialIcons name="shopping-cart" size={27} color="white" />
        </HStack>

      </ContainerVStack>
      <ContainerVStack>
        <Text fontSize={24} fontWeight="bold" mb={0}>Meus itens</Text>
        <Text fontSize={16} color={'gray.400'}>Total: 100 itens adicionados</Text>
      </ContainerVStack>

      <ContainerVStack>
        <ScrollView h={500}>
          {List.map((item) => {
            return (
              <ItemList key={item.id} title={item.title} qtd={item.qtd} />
            );
          })}
        </ScrollView>
      </ContainerVStack>

      <HStack justifyContent={"flex-end"} p={4} mt={3}>
        <ButtonAdd onPress={() => { setModalVisible(!modalVisible) }} />
      </HStack>


      <ModalAddItem onClose={() => setModalVisible(false)} modalVisible={modalVisible} />

    </>
  );
}