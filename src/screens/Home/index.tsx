import { Box, Container, HStack, Heading, Icon, Input, Text, ScrollView, Modal, VStack, Pressable } from 'native-base';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";
import ContainerVStack from "../../components/ContainerVStack";
import ItemList from '../../components/ItemList';
import ButtonAdd from '../../components/ButtonAdd';
import { useRef, useState } from 'react';
import { List } from "../../data/list";
import ModalAddItem from '../../components/ModalAddItem';
import { ItemType } from "../../types/Item";

export default function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [itens, setItens] = useState<ItemType[]>(List);
  const [itensBackup, setItensBackup] = useState<ItemType[]>(List);
  const [sort, setSort] = useState<number>(1);

  const handleAddItem = (item: ItemType) => {
    setItens((prevItens) => [...prevItens, item]);
    setItensBackup((prevItensBackup) => [...prevItensBackup, item]);
  }

  const handleSort = () => {
    let nextCodSort = 0;
    if (sort < 3) {
      nextCodSort = sort + 1;
    } else {
      nextCodSort = 1;
    }

    if (nextCodSort === 1) {  // Sem Ordem
      setItens(itensBackup);
      setSort(1);
    } else if (nextCodSort === 2) {  // Ordem Crescente
      setItens((prevItens) => prevItens.slice().sort((a, b) => a.title.localeCompare(b.title)));
      setSort(2);
    } else if (nextCodSort === 3) { // Ordem Decrescente
      setItens((prevItens) => prevItens.slice().sort((a, b) => b.title.localeCompare(a.title)));
      setSort(3);
    }

  };

  return (
    <>
      <ContainerVStack backgroundColor={'#1b3065'} >
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
        {itens.length > 0 && <Text fontSize={16} color={'gray.400'}>Total: {itens.length} itens adicionados</Text>}
      </ContainerVStack>

      {
        itens.length > 0 ? (
          <ContainerVStack pt={0}>
            <HStack justifyContent={"flex-end"}>
              <Pressable onPress={handleSort} mb={3} borderRadius={20}>
                <Box backgroundColor="#e9edf8" borderRadius={5}>
                  <MaterialIcons
                    name={sort === 1 ? "unfold-more" : (sort === 2 ? "expand-less" : "expand-more")}
                    color="#576d89"
                    size={35}
                    onPress={handleSort}
                  />
                </Box>
              </Pressable>
            </HStack>
            <ScrollView h={500}>
              {itens.map((item, index) => {
                return (
                  <ItemList key={index + 1} title={item.title} qtd={item.quantity} />
                );
              })}
            </ScrollView>
          </ContainerVStack>
        ) : (
          <VStack alignItems={"center"} justifyContent={"center"} flex={1} h={500}>
            <Text
              fontSize={26}
              color={'gray.500'}
              justifyContent={"center"}
              textAlign={"center"}
            >
              Sem itens para exibir...
            </Text >
          </VStack >
        )
      }

      <HStack justifyContent={"flex-end"} p={4} pt={1}>
        <ButtonAdd onPress={() => { setModalVisible(!modalVisible) }} />
      </HStack>


      <ModalAddItem onClose={() => setModalVisible(false)} addItem={handleAddItem} modalVisible={modalVisible} />

    </>
  );
}