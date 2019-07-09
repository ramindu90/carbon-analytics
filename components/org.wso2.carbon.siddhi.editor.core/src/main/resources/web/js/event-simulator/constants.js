/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

define(function() {
    "use strict"; // JS strict mode

    /**
     * Constants used by the tool - server
     */
    var constants = {
        ALLOWED_KEYS: ["Delete", "ArrowRight", "ArrowLeft", "Backspace"],
        INT_LONG_REGEX_MATCH: /^-?[\d]*$/,
        DOUBLE_FLOAT_REGEX_MATCH: /^-?\d*[.]?\d*$/,
        INT_LONG:["INT","LONG"],
        DOUBLE_FLOAT:["DOUBLE","FLOAT"]
    };

    return constants;
});
