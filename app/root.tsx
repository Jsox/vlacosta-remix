import type { MetaFunction } from '@remix-run/node';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { createEmotionCache, MantineProvider } from '@mantine/core';
import { StylesPlaceholder } from '@mantine/remix';
import { NotificationsProvider } from '@mantine/notifications';
import { theme } from './theme';

export const meta: MetaFunction = () => ({
    charset: 'utf-8',
    viewport: 'width=device-width,initial-scale=1',
});

createEmotionCache({ key: 'mantine' });

export default function App() {
    return (
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
            <NotificationsProvider limit={3}>
                <html lang="ru">
                    <head>
                        <StylesPlaceholder />
                        <Meta />
                        <Links />
                    </head>
                    <body>
                        <Outlet />
                        <ScrollRestoration />
                        <Scripts />
                        <LiveReload />
                    </body>
                </html>
            </NotificationsProvider>
        </MantineProvider>
    );
}
