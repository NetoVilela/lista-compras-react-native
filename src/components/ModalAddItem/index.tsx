import { Modal, Text, FormControl, Input, Stack, VStack, Button, WarningOutlineIcon } from 'native-base';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { registerProductSchema } from "./schemaZod";
import { ItemType } from '../../types/Item';

type Props = {
  modalVisible: boolean;
  onClose: () => void;
  addItem: (item: ItemType) => void;
};

export default function ModalAddItem({ modalVisible, addItem, onClose }: Props) {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(registerProductSchema) });
  console.log(errors);
  
  const registerProduct = (data: FieldValues) => {
    console.log(data);
    const {title, quantity} = data;
    const item: ItemType={
      title,
      quantity
    }
    addItem(item);
    reset({
      title: "",
      quantity: ""
    });
    onClose();
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
                <FormControl isRequired isInvalid={!!errors.title}>
                  <FormControl.Label>Nome do produto</FormControl.Label>
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Ex: Arroz"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.title?.message}</FormControl.ErrorMessage>
                </FormControl>
              )}
            />

            <Controller
              control={control}
              name="quantity"
              render={({ field: { onChange, onBlur, value } }) => (
                <FormControl isRequired isInvalid={!!errors.title}>
                  <FormControl.Label>Quantidade</FormControl.Label>
                  <Input
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    keyboardType="numeric"
                    placeholder="Ex: 2"
                  />
                  <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>{errors.quantity?.message}</FormControl.ErrorMessage>
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