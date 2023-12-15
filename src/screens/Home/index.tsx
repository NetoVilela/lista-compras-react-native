import { Box, Container, HStack, Heading, Icon, Input, Text, VStack } from 'native-base';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
  return (
    <VStack width="full" backgroundColor={'#1b3065'} p={4}>
      {/* <Box> */}
      <HStack justifyContent="space-between" pb={2}>

        <Box flexDirection="column" alignItems="flex-start">
          <Text fontWeight={"medium"} fontSize={24} color="#fdfffd">Lista de compras</Text>
          <Text fontWeight={"medium"} fontSize={18} p={0.5} pl={3} pr={3} mt={3} borderRadius={20} bg="#366dfb" color="#fdfffd">Neto Vilela</Text>
        </Box>



        <MaterialIcons name="shopping-cart" size={27} color="white" />
      </HStack>
      {/* </Box> */}


      {/* <Box mt={5}> */}
      {/* <Input
        mt={6}
        placeholder='Buscar'
        fontSize={20}
        backgroundColor="rgb(229, 229, 229)"
        borderRadius={20}
        padding={2}
        InputRightElement={
          <Icon
            as={<Feather name="search" />}
            size={6}
            mr={3}
          />
        }
      /> */}
      {/* </Box> */}
    </VStack>
  );
}