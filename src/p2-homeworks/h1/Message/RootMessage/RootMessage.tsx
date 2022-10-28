import s from  './RootMessage.module.css'
import {MessagePropsType} from '../Message';



export const RootMessage = (props: MessagePropsType) => {
    return (
        <div className={s.rootMessage}>
            <div className={s.content}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message}>{props.message}</div>
            </div>
                <span className={s.time}>{props.time}</span>
        </div>
    );
}

