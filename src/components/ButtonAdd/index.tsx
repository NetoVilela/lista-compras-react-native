import { Button, Text } from 'native-base';

type Props = {
  onPress: () => void;
};

export default function ButtonAdd({ onPress }: Props) {
  return (
    <Button
      bg={'#366dfb'}
      style={{ width: 60, height: 60 }}
      justifyContent={"center"}
      alignItems={"center"}
      borderRadius={30}
      onPress={onPress}
    >
      <Text fontWeight={"normal"} color="white" fontSize={30} style={{ marginTop: -3 }}>+</Text>
    </Button>
  );
}