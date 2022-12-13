import { AppShell, Navbar, Aside, Text, MediaQuery, useMantineTheme } from '@mantine/core';
import { FooterLinks } from '~/components/FooterLinks';
import { HeaderTop } from '~/components/HeaderTop';
import { useDisclosure } from '@mantine/hooks';

const dataFooter = [
    {
        title: 'About',
        links: [
            {
                label: 'About us',
                link: '/about',
            },
            {
                label: 'About us 2',
                link: '/about2',
            },
        ],
    },
];

const headerTopLinks = {
    userLinks: [
        {
            label: 'first',
            link: '/first',
        },
    ],
    mainLinks: [
        {
            label: 'Main page',
            link: '/',
        },
        {
            label: 'About us',
            link: '/about',
        },
    ],
};
export default function AppShellDemo(props: any) {
    const theme = useMantineTheme();

    const [opened, { toggle }] = useDisclosure(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="lg"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
                    <Text>Application navbar</Text>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                    <Aside p="md" hiddenBreakpoint="lg" width={{ lg: 250, xl: 300 }}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            footer={<FooterLinks data={dataFooter} />}
            header={<HeaderTop toggle={toggle} opened={opened} {...headerTopLinks} />}
        >
            {props.children}
        </AppShell>
    );
}
