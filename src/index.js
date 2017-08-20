/**
 * Created by richardcj on 20/8/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';

const HelloFriend = (props) => <h1>{props.title}</h1>


const Photo = (props) =>{
    return(
        <div>
            <HelloFriend {...props}/>
            {/*<HelloFriend title={props.title}/>*/}
            <img src={props.img}
                 alt={props.caption}/>
        </div>
    )
}

ReactDOM.render(<Photo title={'Hello Friend!'}
                       caption={'cap Photo'}
                       img={'https://seeklogo.com/images/G/github-logo-45146A3FBE-seeklogo.com.png'}/>,
    document.getElementById('app'))