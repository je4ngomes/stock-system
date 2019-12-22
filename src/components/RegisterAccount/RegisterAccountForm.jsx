import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import {
  Form,
  Input,
  Icon,
  Select,
  Checkbox,
  Button,
  message,
} from 'antd';

import countryCodes from '../../assets/countryCode.json';
import { signUp } from '../../store/actions/authAction.js';

const { Option } = Select;

const RegisterAccountForm = ({
    form: {
        getFieldDecorator,
        getFieldValue,
        validateFields
    }
}) => {
    const [confirmPass, setConfirmPass] = useState(false);
    const {  authError, isLoading, auth } = useSelector(state => ({
        auth: state.firebase.auth,
        isLoading: state.auth.isLoading,
        authError: state.auth.error
    }));
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
 
        validateFields((err, values) => {
            if (err) return;

            dispatch(signUp({
                creds: {
                    email: values.email,
                    password: values.password
                },
                userInfo: {
                    fullName: values.fullName,
                    prefix: values.prefix,
                    phoneNumber: values.phone
                }
            }));
        })
    };

    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== getFieldValue('password')) {
            callback('Senhas diferentes!');
        } else {
            callback();
        }
    };

    const isLt6Char = (rule, value, callback) => {
        if (value.length < 6) {
            callback('Senha precisar ser maior ou igual a 6 caracteres.');
        } else {
            callback();
        }
    };

    const handleConfirmBlur = e => {
        const { value } = e.target;
        setConfirmPass(confirmPass || !!value);
    };

    const validateToNextPassword = (rule, value, callback) => {
        if (value && confirmPass) {
            validateFields(['confirm'], { force: true });
        }
        callback();
    };

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '55',
    })(
        <Select className='login__select' style={{ width: 150, textAlign: 'center' }} showSearch>
            {countryCodes.map((country, i) => (
                <Option
                    key={i} 
                    value={country.dial_code.replace('+', '')}>
                    {country.name}
                </Option>
            ))}
        </Select>,
    );

    useEffect(() => {
        if (authError)
            message.error(authError.message, 3);
    }, [authError]);

    if (auth.uid && !authError) return <Redirect to='/' />

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Item style={{marginBottom: 10}}>
                {getFieldDecorator('fullName', {
                    rules: [{ required: true, message: 'Por favor, digite seu nome completo.' }]
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: '#fff' }} />}
                        placeholder="Nome completo"
                        required
                        className='bg__input'/>,
                )}
            </Form.Item>

            <Form.Item style={{marginBottom: 10}}>
                {getFieldDecorator('email', {
                    rules: [
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

            <Form.Item style={{marginBottom: 10}} hasFeedback>
            {getFieldDecorator('password', {
                rules: [
                {
                    required: true,
                    message: 'Por favor, digite uma senha.',
                },
                {
                    validator: validateToNextPassword,
                },
                { validator: isLt6Char }
                ],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: '#fff' }} />}
                    type="password"
                    required
                    placeholder="Senha"
                    className='bg__input'
                />,
            )}
            </Form.Item>
            <Form.Item style={{marginBottom: 10}}  hasFeedback>
            {getFieldDecorator('confirm', {
                rules: [
                {
                    required: true,
                    message: 'Por favor, confirme sua senha',
                },
                {
                    validator: compareToFirstPassword,
                },
                ],
            })(
                <Input
                    prefix={<Icon type="lock" style={{ color: '#fff' }} />}
                    type="password"
                    placeholder="Confirma senha"
                    required
                    className='bg__input'
                    onBlur={handleConfirmBlur}
                />,
            )}
            </Form.Item>

            <Form.Item style={{marginBottom: 10}}>
                {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }],
                })(
                    <Input 
                        addonBefore={prefixSelector} 
                        style={{ width: '100%' }}
                        placeholder="Contato telefônico"
                        required
                        className='bg__input' 
                    />)}
            </Form.Item>

        <Form.Item>
            {getFieldDecorator('agreement', {
                valuePropName: 'checked',
            })(
                <Checkbox style={{ color: '#fff' }}>
                    I have read the <a href="">agreement</a>
                </Checkbox>
            )}
            <Link to='/login' style={{ float: 'right' }}>Já possui conta</Link>
            
            <Button 
                disabled={(!getFieldValue('agreement'))} 
                style={{ width: '100%' }} 
                type="primary"
                shape='round'
                loading={isLoading} 
                htmlType="submit"
            >
                Register
            </Button>
            
        </Form.Item>
      </Form>
    )
}

export default Form.create({ name: 'register' })(RegisterAccountForm);
