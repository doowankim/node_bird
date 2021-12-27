import React from 'react';
import { List, Button, Card } from 'antd';
import {StopOutlined} from '@ant-design/icons';
import styled from 'styled-components';

type Props = {
    header: string;
    data: {
        nickname: string
    }[];
}

const FollowList = ({ header, data }: Props) => {
    return (
        <ListWrapper
            grid={{ gutter: 4, xs: 2, md: 3}}
            header={<div>{header}</div>}
            loadMore={
            <ButtonWrapper>
                <Button>더보기</Button>
            </ButtonWrapper>}
            bordered
            dataSource={data}
            renderItem={(item) => (
                <ListItem>
                    <Card actions={[<StopOutlined key="stop" />]}>
                        <Card.Meta description={item.nickname} />
                    </Card>
                </ListItem>
            )}
        />
    )
}

const ListWrapper = styled(List)`
    margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
    text-align: center;
    margin: 10px 0;
`;

const ListItem = styled(List.Item)`
    margin-top: 20px;
`;

export default FollowList
