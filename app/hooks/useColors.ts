import { useMantineColorScheme, useMantineTheme } from '@mantine/core';

export function useColors() {
    const theme = useMantineTheme();
    const { colorScheme } = useMantineColorScheme();

    const primaryTextColor = colorScheme === 'dark' ? theme.colors.indigo[0] : theme.colors.indigo[0];
    const primaryBackgroundColor = colorScheme === 'dark' ? theme.colors.primary[9] : theme.colors.primary[5];
    const textColor = colorScheme === 'dark' ? theme.colors.gray[1] : theme.colors.gray[9];
    const bodyBackgroundColor = colorScheme === 'dark' ? theme.colors.darkBlue[7] : theme.colors.gray[0];
    return {
        textColor,
        primaryBackgroundColor,
        primaryStyles: {
            color: primaryTextColor,
            backgroundColor: primaryBackgroundColor,
        },
        bodyStyles: {
            color: textColor,
            backgroundColor: bodyBackgroundColor,
        },
    };
}
