import React, { useCallback } from 'react';
import {Button, Avatar, Card} from 'antd';

type Props = {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfile = ({setIsLoggedIn}: Props) => {
    const onLogout = useCallback(() => {
        setIsLoggedIn(false);
    }, [])

    return (
        <Card
            actions={[
                <div key="twit">짹짹<br />0</div>,
                <div key="followings">팔로잉<br />0</div>,
                <div key="followers">팔로워<br />0</div>
            ]}
        >
            <Card.Meta 
                avatar={<Avatar>ZC</Avatar>}
                title="kevin"
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    )
}

export default UserProfile
