import { Provider } from "react-redux";
import { store }  from "../store/store";
import {Slot, Stack} from "expo-router";
import React from "react";
import {ThemeProvider} from "rn-css";
import {theme} from "../styled-components/theme";
import {ApolloClient, InMemoryCache, HttpLink, ApolloProvider} from '@apollo/client';
import {GestureHandlerRootView} from "react-native-gesture-handler";

const linearAPIKey = "lin_api_Ei5J2vVJrp6iDflmlYRuzwVuauEJbELfCMhhVqQL"
const linearAPIUrl = "https://api.linear.app/graphql"

const httpLink = new HttpLink({
    uri: linearAPIUrl,
    fetch: fetch,
    headers: {
        Authorization: linearAPIKey,
    },
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),});

export default function RootLayoutNav() {

    return (
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <Provider store={store}>
                    <GestureHandlerRootView>
                        <Slot />
                    </GestureHandlerRootView>
                </Provider>
            </ApolloProvider>
        </ThemeProvider>
    );
}

