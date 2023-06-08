import React from "react";
import './Header.scss'
import { Switch } from 'antd';
import { Button } from 'antd';
import DefaultStore from "../../Store/Default";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
const  Header=observer(()=> {
    let sw = DefaultStore.getHeaderSwitch()
    let pg = DefaultStore.getSelectedPage()
    const onChange = (checked) => {
        DefaultStore.setHeaderSwitch(checked)
    };
    const linkIndex = () => {
        if (pg === 'index') {
            return (<Button type="primary">PLUGVERB</Button>)
        }
        return (<Button >PLUGVERB</Button>)
    }
    const linkAuthors = () => {
        if (pg === "authors") {
            return (<Button type="primary">AUTHORS</Button>)
        }
        return (<Button >AUTHORS</Button>)
    }
    const linkContacts = () => {
        if (pg === "contacts") {
            return (<Button type="primary">CONTACTS</Button>)
        }
        return (<Button >CONTACTS</Button>)
    }
    return (
        <div className="Header">
            <div className="checkButton">
                <Switch size="large" checkedChildren="On" unCheckedChildren="Off" onChange={onChange} defaultChecked={sw} />
            </div>
            <div><Link to="/" className="ls1">{linkIndex()}</Link></div>
            <div className="buttonGroup">
                <Link to="/authors">{linkAuthors()}</Link>
                <Link to="/contacts">{linkContacts()}</Link>
            </div>
        </div>
    );
})

export default Header;