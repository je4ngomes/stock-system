import React from 'react';
import { Link } from 'react-router-dom';
import {
    Form, 
    Icon, 
    Input, 
    Button, 
    Checkbox
} from 'antd';

const LoginForm = ({ 
    form: { 
        getFieldDecorator,
        getFieldsValue
    } 
}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(getFieldsValue());
    };
    
    return (
        <Form onSubmit={handleSubmit} className="login__form">
            <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: '#fff' }} />}
                        placeholder="Username"
                        className='bg__input'
                    />,
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
                    initialValue: true,
                })(<Checkbox style={{ color: '#fff' }}>Lembrar de mim</Checkbox>)}
            
                <a className="login__form__forgot" style={{ float: 'right' }} href="">
                    Esqueceu a senha
                </a>
                <Button 
                    type="primary"
                    htmlType="submit"
                    shape='round' 
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
