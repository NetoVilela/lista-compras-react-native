import { Box, Pressable, Text } from 'native-base';

type Props = {
  onPress: () => void;
};

export default function ButtonAdd({ onPress }: Props) {
  // const handlePress = () => {
  //   console.log('Box Pressed!');
  //   // Adicione a lógica desejada para lidar com o pressionamento aqui
  // };

  return (
    <Pressable onPress={onPress}>

      <Box
        bg={'#366dfb'}
        style={{ width: 60, height: 60 }}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={30}
      >
        <Text fontWeight={"normal"} color="white" fontSize={30}>+</Text>
      </Box>
    </Pressable>
  );
}