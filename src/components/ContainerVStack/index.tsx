import { VStack } from 'native-base';


type Props = {
  children: React.ReactNode;
  backgroundColor?: string;
  p?: number;
};

export default function ContainerVStack({ children, backgroundColor = "#fdfffd", p = 4, ...props }: Props) {
  return (
    <VStack width={"full"} p={p} backgroundColor={backgroundColor} {...props}>
      {children}
    </VStack>
  );
}