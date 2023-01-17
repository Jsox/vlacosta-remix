import { Text, Button, Stack, Title, TypographyStylesProvider, Mark, Blockquote, Tooltip } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useLoaderData } from '@remix-run/react';
import Layout from '../layouts/Layout';
import Api from '../lib/api.server';

export async function loader() {
    return { data: Api.pe() };
}

export default function Index() {
    const { data } = useLoaderData();
    return (
        <Layout>
            <Stack align="center" my={50}>
                <Title order={3}>
                    Title in which you want to{' '}
                    <Text span c="teal.4" td={'line-through'} inherit>
                        {data} 123
                    </Text>{' '}
                    something
                </Title>
                <Blockquote cite="– Forrest Gump">
                    Life is like an npm install – you never know what you are going to get.
                </Blockquote>
                <Tooltip transition="skew-up" transitionDuration={300} label={'helloooo'}>
                    <button>target</button>
                </Tooltip>
                <Tooltip label="Tooltip" color="pink" position="top-start" withArrow>
                    <Button variant="outline" size="xl">
                        With tooltip
                    </Button>
                </Tooltip>
                <Text lineClamp={4}>
                    <TypographyStylesProvider>
                        <h3>Line clamp with TypographyStylesProvider</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
                            corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non!
                            Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam
                            aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.
                        </p>
                    </TypographyStylesProvider>
                </Text>
                <Text
                    size={'lg'}
                    lineClamp={8}
                    color={'violet'}
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'cyan' }}
                >
                    Равным образом понимание сущности ресурсосберегающих технологий в значительной степени обуславливает
                    создание позиции, занимаемых участниками в отношении поставленных задач. Не следует, однако,
                    забывать, что выбранный нами инновационный путь представляет собой интересный эксперимент системы
                    обучения кадров, соответствующей насущным потребностям.
                </Text>
                <Text
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                    sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                    ta="center"
                    fz="xl"
                    fw={700}
                >
                    Indigo cyan gradient
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
