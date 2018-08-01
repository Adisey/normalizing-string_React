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


class FormLN extends Component {

    state = {
        originalString: '',
        processedString: '',
    };

    componentDidMount() {
        this._createLine ();

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
        // Если понадобится проверерить перенос хвостовых гласных на другуб строку
        // const _originalString = 'zareyurioateyuioaeyuioxczerwermm';
        this.setState ({ originalString: _originalString, processedString: _originalString });
    };

    render() {
        const { TextArea } = Input;
        const { processedString } = this.state;
        const { Header, Content,  } = Layout;

        return (
            <div className="main">
                <Layout className="layout">
                    <h2>Нормализация строки</h2>
                    <Header className="header">
                        <Row>
                            <Col span={14}>
                                <Button className="button" icon="reload" onClick={this._createLine}>Новая строка</Button>
                                <Button className="button" type="primary" icon="swap" onClick={this._normalizeString}>Нормализовать</Button>
                                <Button className="button" icon="retweet" onClick={this._returnPreviousLine}>Вернуть </Button>
                            </Col>
                            <Col span={7} offset={3}>
                                <Button className="button" icon="download">Сохранить</Button>
                                <Button className="button" icon="upload">Прочитать</Button>
                            </Col>
                        </Row>
                    </Header>
                    <Content className="content">
                    <TextArea
                        rows={4}
                        value={processedString}
                    />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default FormLN;

