import React, { useState } from 'react';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import styled from 'styled-components';

type Props = {
    children: React.ReactNode;
}

const AppLayout = ({children}: Props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>회원가입</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile setIsLoggedIn={setIsLoggedIn} /> : <LoginForm setIsLoggedIn={setIsLoggedIn} />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {/* a 태그안에 새 창으로 띄워줄 때, target="_blank"만 적는 것은 보안에 위협이 될 수 있다. */}
                    {/* 따라서 rel="noreferrer noopener"까지 같이 적어주는 것을 습관화해야 한다. */}
                    {/* 새 창을 열게 되면 누가 열게 되는지 모르게 된다. */}
                    <a href="https://www.naver.com" target="_blank" rel="noreferrer noopener">naver</a>
                </Col>
            </Row>
        </div>
    )
}

const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

export default AppLayout
