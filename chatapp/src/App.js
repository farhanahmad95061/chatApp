import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
const App =()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return (
       
         <ChatEngine
            height="100vh"
            projectID="7ba85516-5535-454f-96bc-17afebb4765c"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed  {...chatAppProps}/>}
        />
    );
}

export default App;