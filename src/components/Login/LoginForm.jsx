import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    Form, 
    Icon, 
    Input, 
    Button, 
    Checkbox
} from 'antd';

import { signIn } from '../../store/actions/authAction';

const LoginForm = ({ 
    form: { 
        getFieldDecorator,
        validateFields
    } 
}) => {   
    const dispatch = useDispatch();
    const {  isLoading } = useSelector(state => ({
        isLoading: state.auth.isLoading,
    }));

    const handleSubmit = (e) => {
        e.preventDefault();
        
        validateFields((err, { email, password, remember }) => {
            if (err) return;

            dispatch(signIn({ email: email.trim(), password, remember  }));
        });
    };
    
    return (
        <Form onSubmit={handleSubmit} className="login__form">
            <Form.Item style={{marginBottom: 10}}>
                {getFieldDecorator('email', {
                    rules: [
                        { transform: val => val.trim() },
                        {
                            type: 'email',
                            message: 'Por favor, digite um e-mail válido',
                        },
                        {
                            required: true,
                            message: 'Por favor, digite seu e-mail.',
                        },
                    ],
                    
                })(
                    <Input
                        prefix={<Icon type="mail" style={{ color: '#fff' }} />}
                        placeholder="E-mail"
                        required
                        className='bg__input'/>
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }]
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: '#fff' }} />}
                        type="password"
                        placeholder="Password"
                        className='bg__input'
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: false,
                })(<Checkbox style={{ color: '#fff' }}>Lembrar de mim</Checkbox>)}
            
                <a className="login__form__forgot" style={{ float: 'right' }} href="">
                    Esqueceu a senha
                </a>
                <Button 
                    type="primary"
                    htmlType="submit"
                    shape='round'
                    loading={isLoading} 
                    style={{ width: '100%' }}
                    className="login__form__button">
                    Login
                </Button>
                
                
                <span style={{color: '#fff'}}>Ou</span> <Link to='/register'>Cadastre-se</Link>
            </Form.Item>
        </Form>
    )
}

export default Form.create({ name: 'login__form' })(LoginForm);
