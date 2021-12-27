import React, { useState, useCallback } from 'react';
import {Button, Form, Input} from 'antd';
import Link from 'next/link';
import styled from 'styled-components';

type Props = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ setIsLoggedIn }: Props) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback(e => {
        setId(e.target.value);
    }, [])

    const onChangePassword = useCallback(e => {
        setPassword(e.target.value);
    }, [])

    const onSubmitForm = useCallback(e => {
        console.log(id, password)
        setIsLoggedIn(true);
    }, [id, password])

    return (
        <FormWrapper onFinish={onSubmitForm}>
            <div>
                <label htmlFor="user_id">아이디</label>
                <br />
                <Input name="user_id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user_password">비밀번호</label>
                <br />
                <Input name="user_password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <ButtonWrapper>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </ButtonWrapper>
        </FormWrapper>
    )
}

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

export default LoginForm
