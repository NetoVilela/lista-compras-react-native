import { Box, HStack, Text } from 'native-base';

type Props = {
  title: string;
  qtd: number;
  mt?: number;
};

export default function ItemList({ title, qtd, mt = 3, ...props }: Props) {
  return (
    <Box bg="#e9edf8" p={3} borderRadius={10} mt={mt} {...props}>
      <HStack justifyContent={"space-between"}>
        <Text fontWeight={"bold"} color="#576d89">{title}</Text>
        <Text fontWeight={"bold"} color="#576d89">x{qtd}</Text>
      </HStack>
    </Box>
  );
}