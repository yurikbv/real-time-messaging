import React from 'react';
import { Dimensions, Text, FlatList, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';
import { GET_CONVERSATION } from '../constants';

import Message from "../Components/Message/Message";
import ConversationActions from '../Components/Conversation/ConversationActions';

const ConversationWrapper = styled(View)`
  flex: 1;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ConversationBody = styled(ScrollView)`
  width: 100%;
  padding: 2%;
  display: flex;
  height: ${Dimensions.get('window').height * 0.6};
`;

const ConversationBodyText = styled(Text)`
  font-size: 20px;
  color: black;
`;

const MessagesList = styled(FlatList)`
  width: 100%;
`;

const Conversation = ({ route }) => {
  const { userName } = route.params;
  return (
      <ConversationWrapper>
        <Query query={GET_CONVERSATION} variables={{userName}} >
          {({loading, data}) => {
            console.log(data);
            if (loading) return <ConversationBodyText>Loading...</ConversationBodyText>;
            const { messages } = data.conversation;
            return <MessagesList
              data={messages}
              keyExtractor={item => String(item.id)}
              renderItem={({item}) => <Message align={item.userName === 'me' ? 'left' : 'right'}>
                {item.text}
              </Message>}
            />
          }}
        </Query>
        <ConversationActions userName={userName} />
      </ConversationWrapper>
  );
};

export default Conversation;
