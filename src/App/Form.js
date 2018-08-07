/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 01.08.2018
 * Time: 10:08
 */
// Core
import React, { Component } from 'react';
import { Input, Button, Layout, Row, Col } from 'antd';

import './Form.css';

// Tools
import { createLine, normalizeString } from '../Tools';
import { api } from '../Api';


class FormLN extends Component {

    state = {
        originalString: '',
        processedString: '',
    };

    componentDidMount() {
        this._createLine ();

    };

    _fetchStringsAsync = async () => {
        try {
            const _strings = await api.fetchStrings ();
            this.setState ({
                originalString: _strings[0].originalString,
                processedString: _strings[0].processedString,
            });
        }
        catch ({ messageError }) {
            console.error (messageError);
        }
        finally {
            console.log (`Строки получены`);

        }
    };

    _postStringsAsync = async () => {
        try {
            const stringsSave = this.state;
            await api.postStrings (stringsSave);
            await console.log ("Строки сохнанены.");
        }
        catch ({ messageError }) {
            console.error ("Не удалось сохранить на сервер.");
        }
    };


    _returnPreviousLine = () => {
        let { originalString, } = this.state;
        this.setState ({ processedString: originalString });
    };


    _normalizeString = () => {
        let { processedString, } = this.state;
        const _processedString = normalizeString (processedString);
        this.setState ({ processedString: _processedString });
    };

    _createLine = (length) => {
        const _length = (typeof length !== "number") || (length = 0) ? 15 : length;
        const _originalString = createLine (_length);
        /* Если понадобится проверерить перенос хвостовых гласных на другуб строку
        ** const _originalString = 'zareyurioateyuioaeyuioxczerwermm';
        */
        this.setState ({ originalString: _originalString, processedString: _originalString });
    };

    render() {
        const { TextArea } = Input;
        const { processedString } = this.state;
        const { Header, Content, Footer } = Layout;

        return (
            <div className="main">
                <Layout className="layout">
                    <h2>Нормализация строки</h2>
                    <Header className="header">
                        <Row>
                            <Col span={14} className="colwidthauto">
                                <Button className="button" icon="reload" onClick={this._createLine}>Новая
                                    строка</Button>
                                <Button className="button" icon="swap" type="primary"
                                        onClick={this._normalizeString}>Нормализовать</Button>
                                <Button className="button" icon="retweet"
                                        onClick={this._returnPreviousLine}>Вернуть </Button>
                            </Col>
                            <Col span={10}>
                            </Col>

                        </Row>
                    </Header>
                    <Content className="content">
                    <TextArea
                        className="textarea"
                        rows={4}
                        value={processedString}
                    />
                    </Content>
                    <Footer className="footer">
                        <Col span={16}/>
                        <Col span={8} className="colwidthauto">
                            <Button className="button" icon="download"
                                    onClick={this._postStringsAsync}>Сохранить</Button>
                            <Button className="button" icon="upload"
                                    onClick={this._fetchStringsAsync}>Прочитать</Button>
                        </Col>
                    </Footer>

                </Layout>
            </div>
        );
    }
}

export default FormLN;

