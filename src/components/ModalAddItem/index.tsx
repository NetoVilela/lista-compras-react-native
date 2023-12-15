import { Modal, Text, FormControl, Input, Stack, VStack, Button, WarningOutlineIcon } from 'native-base';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerProductSchema } from "./schemaZod";

type Props = {
  modalVisible: boolean;
  onClose: () => void;
};

export default function ModalAddItem({ modalVisible, onClose }: Props) {
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerProductSchema) });
  console.log(errors);
  const registerProduct = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <Modal isOpen={modalVisible} onClose={onClose} safeAreaTop={true}>
        <Modal.Content>

          <VStack width={"full"} p={5}>

            <Controller
              control={control}
              name="title"
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControl>
                  <FormControl.Label>Nome do produto</FormControl.Label>
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Ex: Arroz"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>Digite um email cadastrado</FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="quantity"
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControl>
                  <FormControl.Label>Quantidade</FormControl.Label>
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType="numeric"
                    placeholder="Ex: 2"
                  />
                </FormControl>
              )}
            />

          </VStack>

          <Button mt={2} bg={"#366dfb"} p={4} onPress={handleSubmit(registerProduct)}>
            <Text color={"#fdfffd"} fontWeight={"bold"}>Adicionar</Text>
          </Button>

        </Modal.Content>
      </Modal>
    </>
  );
}