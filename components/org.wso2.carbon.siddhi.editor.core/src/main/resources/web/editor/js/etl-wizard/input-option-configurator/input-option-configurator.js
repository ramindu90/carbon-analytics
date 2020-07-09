/*
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 *  WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

define(['require', 'jquery', 'lodash', 'log', 'alerts', 'filterInputOptionComponent', 'windowInputOptionComponent', 'functionInputOptionComponent'],

    function (require, $, _, log, Alerts, FilterInputOptionsComponent, WindowInputOptionsComponent, FunctionInputOptionComponent) {
        
        var InputOptionConfigurator = function (container, config) {
            this.__container = container;
            this.__config = config;
        }

        InputOptionConfigurator.prototype.constructor = InputOptionConfigurator;

        InputOptionConfigurator.prototype.render = function () {
            var self = this;
            var container = self.__container;
            var config = self.__config;

            container.append(`
                <div style="max-height: ${self.__container.offsetHeight}; flex-direction: column" class="content-section">
                    <div class="input-option-btn-group" style="display: flex;">
                        <button id="btn-add-filter" style="margin-left: auto; min-width: 90px; background: #ee6719" class="btn btn-default">+ Filter</button>
                        <button id="btn-add-function" style="margin-left: 15px; min-width: 90px; background: #ee6719" class="btn btn-default">+ Function</button>
                        <button id="btn-add-window" style="margin-left: 15px; min-width: 90px; background: #ee6719" class="btn btn-default">+ Window</button>
                    </div>
                    <div class="input-option-container" style="display: flex; align-items: center; justify-content: center; height: calc(100% - 15px)" >
                        
                    </div>
                </div>
            `);

            self.__container.find('.input-option-btn-group>button')
                .on('click', function (evt) {
                    $(evt.currentTarget).attr('disabled', true);
                    var btnType = evt.currentTarget.id.match('btn-add-([a-z]+)')[1];

                    var inputOptionSection = $('<div class="input-option-section" style="margin-right:15px;min-width: 45%;max-width: 45%;min-height: 70%;display: flex;flex-direction: column;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);padding: 15px;background-color: #3a3a3a;"></div>');

                    container.find('.input-option-container').append(inputOptionSection);

                    switch (btnType) {
                        case 'filter':
                            container.find('#btn-add-function').attr('disabled', true);
                            new FilterInputOptionsComponent(inputOptionSection, config).render();
                            break
                        case 'function':
                            container.find('#btn-add-filter').attr('disabled', true);
                            new FunctionInputOptionComponent(inputOptionSection, config).render();
                            break;
                        case 'window':
                            new WindowInputOptionsComponent(inputOptionSection, config).render();
                            break;
                    }
                });

            if (Object.keys(self.__config.query.filter).length > 0) {
                var inputOptionSection = $('<div class="input-option-section" style="margin-right:15px;min-width: 45%;max-width: 45%;min-height: 70%;display: flex;flex-direction: column;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);padding: 15px;background-color: #3a3a3a;"></div>');
                container.find('.input-option-container').append(inputOptionSection);
                container.find('#btn-add-function').attr('disabled', true);
                container.find('#btn-add-function').attr('disabled', true);
                new FilterInputOptionsComponent(inputOptionSection, config).render();
            }

            if (Object.keys(self.__config.query.filter).length > 0) {
                var inputOptionSection = $('<div class="input-option-section" style="margin-right:15px;min-width: 45%;max-width: 45%;min-height: 70%;display: flex;flex-direction: column;box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);padding: 15px;background-color: #3a3a3a;"></div>');
                container.find('.input-option-container').append(inputOptionSection);
                container.find('#btn-add-window').attr('disabled', true);
                new WindowInputOptionsComponent(inputOptionSection, config).render();
            }
        }

        return InputOptionConfigurator;
    });
