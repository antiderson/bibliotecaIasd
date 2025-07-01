import React from 'react';
import { H4, H6, Separator, Sheet, XStack, YStack } from 'tamagui';

export const SheetPsswd = () => {
    const [open, setOpen] = React.useState(false)
    const [modal] = React.useState(true)

    return (
        <>
            <YStack>
                <XStack $sm={{ flexDirection: 'column', alignItems: 'center' }}>
                    <H6 mr='10px' size={"$3"}>Esqueceu a senha?</H6>
                    <a onClick={() => setOpen(true)} style={{ color: '#003366', cursor: 'pointer', fontFamily: 'Poppins' }}>Clique Aqui</a>
                </XStack>
            </YStack>
            <Sheet
                forceRemoveScrollEnabled={open}
                modal={modal}
                open={open}
                onOpenChange={setOpen}
                zIndex={100_000}
                animation="medium">
                <Sheet.Overlay
                    animation="lazy"
                    enterStyle={{ opacity: 0 }}
                    exitStyle={{ opacity: 0 }} />
                <Sheet.Handle />
                <Sheet.Frame padding="$4" justifyContent="center" alignItems="center" >
                    <YStack w={'60%'} alignItems='center'>
                        <H4>Funcionalidade indisponível nessa versão</H4>
                        <Separator marginVertical={30} w={'30%'} style={{ backgroundColor: '#ff0000' }} bg={'$red10'} />
                        <H6 textAlign="center">A funcionalidade de resetar a senha estará disponível na próxima atualização,< br />  em caso de necessidade contate o suporte técnico ou responsável. </H6>
                    </YStack>
                </Sheet.Frame>
            </Sheet>
        </>
    )
}
