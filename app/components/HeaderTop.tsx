import { useState } from 'react';
import { createStyles, Header, Container, Anchor, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
// import { MantineLogo } from '@mantine/ds';
import { NavLink } from '@remix-run/react';

const HEADER_HEIGHT = 84;

const useStyles = createStyles((theme) => ({
    inner: {
        height: HEADER_HEIGHT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    burger: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    links: {
        paddingTop: theme.spacing.lg,
        height: HEADER_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    mainLinks: {
        marginRight: -theme.spacing.sm,
    },

    mainLink: {
        textTransform: 'uppercase',
        fontSize: 13,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        padding: `7px ${theme.spacing.sm}px`,
        fontWeight: 700,
        borderBottom: '2px solid transparent',
        transition: 'border-color 100ms ease, color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
        },
    },

    secondaryLink: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[6],
        fontSize: theme.fontSizes.xs,
        textTransform: 'uppercase',
        transition: 'color 100ms ease',

        '&:hover': {
            color: theme.colorScheme === 'dark' ? theme.white : theme.black,
            textDecoration: 'none',
        },
    },

    mainLinkActive: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        borderBottomColor: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 5 : 6],
    },
}));

interface LinkProps {
    label: string;
    link: string;
}

interface DoubleHeaderProps {
    mainLinks: LinkProps[];
    userLinks: LinkProps[];
    opened: boolean;
    toggle: any;
}

export function HeaderTop({ opened, toggle, mainLinks, userLinks }: DoubleHeaderProps) {
    const { classes } = useStyles();

    const mainItems = mainLinks.map((item, index) => (
        <NavLink to={item.link} key={item.label} className={classes.mainLink}>
            {item.label}
        </NavLink>
    ));

    const secondaryItems = userLinks.map((item) => (
        <NavLink to={item.link} key={item.label} className={classes.secondaryLink}>
            {item.label}
        </NavLink>
    ));

    return (
        <Header height={HEADER_HEIGHT} mb={120}>
            <Container className={classes.inner}>
                {/* <MantineLogo size={34} /> */}
                <div>Logo1</div>
                <div className={classes.links}>
                    <Group position="right">{secondaryItems}</Group>
                    <Group spacing={0} position="right" className={classes.mainLinks}>
                        {mainItems}
                    </Group>
                </div>
                <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            </Container>
        </Header>
    );
}
