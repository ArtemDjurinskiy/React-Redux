
import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';





const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog  + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
    <div className={s.dialog}>{props.message}</div>
    );
}

const Dialogs = (props) => {

    let newMessagElement = React.createRef();

    let addMasseg = () => {
        let text = newMessagElement.current.value;
        props.addMasseg(text)
        newMessagElement.current.value = '';
    }
    
    let dialogsElements =  props.state.dialogs.map (d => <DialogItem name={d.name} id={d.id}/>);
    
    let messagesElements = props.state.messages.map (m => <Message message={m.message}/>);
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}          
            </div>
            <div className={s.messages}>
               {messagesElements}              
            </div>
            <div>
                <textarea ref = {newMessagElement}></textarea>
            </div>
            <div>
                <button onClick = {addMasseg}>Add messeg</button>
            </div>
        </div>

    );
};


export default Dialogs;
