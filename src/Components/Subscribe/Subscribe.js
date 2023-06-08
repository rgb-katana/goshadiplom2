import React from "react";
import './Subscribe.scss'
import { Button, Input,Space } from "antd";

function Subscribe(){
    return (
        <div className="subscribe">
            <Space direction="vertical">
            <div className="header">SUBSCRIBE</div>
            <div className="context">
            Lorem ipsum dolor sit amet consectetur. Nibh et sit pellentesque aliquam. Ullamcorper purus fringilla commodo elit quisque. Sed non tellus elit erat scelerisque. Donec cum aliquam quisque nibh purus aliquam auctor.
            </div>

            <div>
            <a href="http://qrcoder.ru" ><img src="http://qrcoder.ru/code/?https%3A%2F%2Ft.me%2Fhydroshadeplg&4&0" width="300" height="300" border="0" title="QR код" alt="qr"></img></a>
            </div>
            
            {/*<div className="label">Telegram:</div>*

            <Input></Input>

            <div className="label">Email:</div>
    <Input></Input>*/}

            
            <Button type="primary" ghost size="small" href="https://t.me/hydroshadeplg">Subscribe</Button>
            </Space>
        </div>
    )
   
}

export default Subscribe