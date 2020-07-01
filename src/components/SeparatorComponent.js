import React from 'react';
import { Parallax, Background } from 'react-parallax';

export const Separator = (props) => (

    <div>
        <Parallax
            bgImage={require('./../assets/separator.jpg')} strength={500}
        >
            <div style={{ height: '15vh', width: window.innerWidth}}>
                <div>{props.name}</div>
            </div>
        </Parallax>
    </div>

)