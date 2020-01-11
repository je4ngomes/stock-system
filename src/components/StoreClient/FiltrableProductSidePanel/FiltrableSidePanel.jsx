import React from 'react';
import styled from 'styled-components';
import { Form, Checkbox } from 'antd';
import HeaderTitle from '../../shared/HeaderTitle';

const Aside = styled.aside`
    display: flex;
    flex-basis: 20%;
    background: #fff;
    box-sizing: border-box;
    flex-flow: column;
`;

const SpanTitle = styled.span`
    font-size: 12pt;
    color: #42a5f5;
    font-weight: bold;
`;

const CheckboxGroup = styled(Checkbox.Group)`
    display: flex;
    margin-left: 10px;
    flex-flow: column;
`;

const FormStyled = styled(Form)`
    padding: 0px 20px;
`

const FiltrableSidePanel = ({
    form: { getFieldDecorator },
    brandsOptions,
    handleChange
}) => {

    return (
        <Aside>
            <HeaderTitle title={'Filtro'}/>
            <FormStyled onChange={handleChange}>
                <Form.Item label={<SpanTitle>Marcas</SpanTitle>}>
                    {getFieldDecorator('brands',{

                    })(<CheckboxGroup 
                        options={brandsOptions}/>)}
                </Form.Item>
            </FormStyled>
        </Aside>    
    );
};

export default Form.create()(FiltrableSidePanel);