import { Text, Button, Stack } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import Layout from '~/layouts/Layout';

export default function Index() {
    return (
        <Layout>
            <Stack align="center" my={50}>
                <Text size="md" weight={500}>
                    Не следует, однако, забывать, что новая модель организационной деятельности играет важную роль в
                    формировании новых предложений. Идейные соображения высшего порядка, а также сложившаяся структура
                    организации способствует подготовке и реализации новых предложений. Разнообразный и богатый опыт
                    высокотехнологичная концепция общественной системы играет важную роль в формировании поставленных
                    обществом и правительством задач.
                </Text>
                <Button>Click the button</Button>
            </Stack>
            <Stack align="center">
                <Button
                    color={'pink.5'}
                    variant="outline"
                    onClick={() =>
                        showNotification({
                            title: 'Default notification!!!',
                            message: 'Hey there, your code is awesome! 🤥',
                        })
                    }
                >
                    Show notification
                </Button>
            </Stack>
        </Layout>
    );
}
