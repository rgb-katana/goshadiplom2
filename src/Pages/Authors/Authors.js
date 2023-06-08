import React from "react";
import './Authors.scss';
import DefaultStore from "../../Store/Default";
import AuthorsStore from "../../Store/AuthorsStore"
import InteractivePlugin from "../../Components/InteractivePlugin/InteractivePlugin.js";
import { Space } from "antd";
import Download from "../../Components/Download/Download.js";
import { observer } from "mobx-react-lite";
const Authors = observer(() => {

    DefaultStore.setSelectedPage("authors")
    let authors = AuthorsStore.getAuthors()
    console.log(authors)
    const aut = authors.map((author) => {

        return (
            <div className="author">
                <din className="fio">{author.fio}</din>
                <div className="text" dangerouslySetInnerHTML={{ __html: author.text }}></div>
                <div className="row">
                    <div className="params">ROLE:{author.role}</div>
                    <div className="params">AGE:{author.age}</div>
                    <div className="params">FOOD:{author.food}</div>
                    <div className="params">SIGN:{author.sign}</div>
                </div>
            </div>
        )
    })
    return (
        <div id="authors">
            <InteractivePlugin />
            <Space> </Space>
            <Download />
            <Space> </Space>
            <div className="header">
                ABOUT AUTHORS
            </div>
            <div className="text">
                Lorem ipsum dolor sit amet consectetur. Mauris tortor laoreet in eu enim. Id lectus ipsum lacinia et tincidunt ac consectetur. Eleifend mi in congue nunc faucibus magna commodo malesuada. Maecenas morbi tristique malesuada in ante imperdiet etiam donec posuere.
            </div>
            {aut}
        </div>
    );
})

export default Authors