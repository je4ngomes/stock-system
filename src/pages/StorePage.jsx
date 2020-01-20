import React from 'react';
import styled from 'styled-components';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import MenuStore from '../components/layout/MenuStore';
import StoreLandingPage from './StoreLandingPage';
import BottomAppBar from '../components/layout/BottomAppBar';
import ProductDetailsPage from './ProductDetailsPage';
import useOnAuthChange from '../hooks/useOnAuthChange';
import ShoppingCartPage from './ShoppingCartPage';

const Page = styled.div`
    display: flex;
    flex-flow: column;
    min-height: 100vh;
`;

const Div = styled.div`
    margin-bottom: 20px;
`;

const Main = styled.div`
    flex: 1;
    
    @media all and (max-width: 959px) {
        margin-bottom: 4rem;
    }
`;

const Content = styled(Div)`
    display: flex;
    flex-flow: row;
    padding: 40px;
    justify-content: space-around;
    width: 90%;
    margin: auto;

    @media all and (max-width: 900px) {
        width: 100%;
        padding: 0px;
    }
`;

const StorePage = () => {
    const match = useRouteMatch();
    const history = useHistory();

    useOnAuthChange(user => {
        // only logged users has access to this page.
        if (!user) history.push('/login');
    });

    return (
        <Page>
            <Main>
                <Div>
                    <MenuStore/>
                </Div>
                <Content>
                    <Route exact path={`${match.path}/`}>
                        <StoreLandingPage />
                    </Route>
                    <Route path={`${match.path}/view/:id`}>
                        <ProductDetailsPage />
                    </Route>
                    <Route path={`${match.path}/cart`}>
                        <ShoppingCartPage />
                    </Route>
                </Content>
            </Main>
            <BottomAppBar/>
        </Page>
    );
};

export default StorePage;