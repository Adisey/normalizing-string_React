/**
 * Created by PhpStorm
 * Project p900-React-test
 * User: Adisey
 * Date: 01.08.2018
 * Time: 10:08
 */
// Core
import React, { Component } from 'react';
import { Input, Button } from 'antd';
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

    _normalizeString = () => {
        let { processedString, } = this.state;
        const _processedString = normalizeString(processedString);
        this.setState ({ processedString: _processedString });
    };

    _createLine = (length) => {
        const _length = (typeof length !== "number") || (length = 0) ? 15 : length;
        const _originalString = createLine (_length);
        this.setState ({ originalString: _originalString, processedString: _originalString });
    };

    render() {
        const { TextArea } = Input;
        const { processedString } = this.state;

        return (
            <div>
                <h2>Нормализация строки</h2>
                <div>
                    <Button icon="reload" onClick={this._createLine}>Генерировать строку</Button>
                </div>
                <div>
                    <TextArea
                        rows={4}
                        value={processedString}
                    />
                </div>
                <div>
                    <Button type="primary" icon="swap" onClick={this._normalizeString}>Нормализовать</Button>
                    <Button icon="retweet">Вернуть </Button>
                </div>
                <div>
                    <Button icon="download">Сохранить</Button>
                    <Button icon="upload">Прочитать</Button>
                </div>
            </div>
        );
    }
}

export default FormLN;

