import { AppShell, Aside, Text, MediaQuery } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { NavbarSearch } from './../components/NavbarSearch/NavbarSearch';
import { HeaderAction } from './../components/HeaderAction/HeaderAction';
import { headerTopLinks } from '../data/links';
import { useColors } from '../hooks/useColors';

export default function AppShellDemo(props: any) {
    const { bodyStyles } = useColors();
    const [opened, { toggle }] = useDisclosure(false);
    return (
        <AppShell
            styles={{
                main: { ...bodyStyles },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="lg"
            navbar={NavbarSearch({ opened, toggle })}
            // navbar={
            //     <Navbar
            //         styles={{
            //             background: theme.colorScheme === 'dark' ? theme.colors.darkBlue[9] : theme.colors.gray[0],
            //         }}
            //         p="md"
            //         hiddenBreakpoint="sm"
            //         hidden={!opened}
            //         width={{ sm: 200, lg: 300 }}
            //     >
            //         <Text>Application navbar</Text>
            //     </Navbar>
            // }
            aside={
                <MediaQuery smallerThan="lg" styles={{ display: 'none' }}>
                    <Aside style={{ background: 'transparent' }} p="md" width={{ lg: 200, xl: 250 }}>
                        <Text>Application sidebar</Text>
                    </Aside>
                </MediaQuery>
            }
            // footer={<FooterLinks data={dataFooterLinks} />}
            header={HeaderAction({ links: headerTopLinks.mainLinks, opened, toggle })}
        >
            {props.children}
        </AppShell>
    );
}
