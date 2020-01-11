import React from 'react';
import styled from 'styled-components';

import deviceSize from '../utils/device';
import MenuStore from '../components/layout/MenuStore';
import FiltrableProductSidePanel from '../components/StoreClient/FiltrableProductSidePanel';
import HeaderTitle from '../components/shared/HeaderTitle';


const Page = styled.div`
    display: flex;
    flex-flow: column;
`;

const Item = styled.div`
    margin-bottom: 20px;
`;

const Header = styled(Item)`
`;

const Content = styled(Item)`
    display: flex;
    flex-flow: row;
    justify-content: space-around;
    width: 95%;
    margin: auto;

    @media all and (max-width: 768px) {
        width: 100%;
    }
`;

const Main = styled.main`
    flex-basis: 75%;
    padding: 0px 40px 0px 40px;
    background: #fff;
`;

const StorePage = () => {
    return (
        <Page>
            <Header>
                <MenuStore/>
            </Header>
            
            <Content>
                <FiltrableProductSidePanel/>
                <Main>
                    <HeaderTitle title={'Produto'}/>
                </Main>
            </Content>
        </Page>
    );
};

export default StorePage;