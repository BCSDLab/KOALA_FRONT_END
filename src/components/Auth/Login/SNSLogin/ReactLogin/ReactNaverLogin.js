'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
/**
 * used react-naver-login
 * original source code: https://github.com/peoplefund-tech/react-naver-login.git
 *
 * - change sdk version to to 2.0.2
 * - added isPopup prop
 * @crazy-oung dayoung han
 */

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function (d, b) {
  extendStatics =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function (d, b) {
        d.__proto__ = b;
      }) ||
    function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
}

var NAVER_ID_SDK_URL = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js';
var isServer = function () {
  return typeof window === undefined;
};
/**
 * 이 함수는 브라우저 환경에서만 호출이 되야 한다. window 객체에 직접 접근한다.
 * @param props
 */
var initLoginButton = function (props) {
  if (isServer()) {
    return;
  }
  var clientId = props.clientId,
    callbackUrl = props.callbackUrl,
    isPopup = props.isPopup,
    onSuccess = props.onSuccess,
    onFailure = props.onFailure;

  var naver = window['naver'];
  var naverLogin = new naver.LoginWithNaverId({
    callbackUrl: callbackUrl,
    clientId: clientId,
    isPopup: isPopup,
    loginButton: { color: 'green', type: 3, height: 60 },
  });
  naverLogin.init();
  if (!window.opener) {
    naver.successCallback = function (data) {
      return onSuccess(data);
    };
    naver.failureCallback = onFailure;
  } else {
    naverLogin.getLoginStatus(function (status) {
      if (status) {
        window.opener.naver.successCallback(naverLogin.user);
      } else {
        window.opener.failureCallback();
      }
      window.close();
    });
  }
};
var appendNaverButton = function () {
  if (document && document.querySelectorAll('#naverIdLogin').length === 0) {
    var naverId = document.createElement('div');
    naverId.id = 'naverIdLogin';
    naverId.style.position = 'absolute';
    naverId.style.top = '-10000px';
    document.body.appendChild(naverId);
  }
};
var loadScript = function (props) {
  if (document && document.querySelectorAll('#naver-login-sdk').length === 0) {
    var script = document.createElement('script');
    script.id = 'naver-login-sdk';
    script.src = NAVER_ID_SDK_URL;
    script.onload = function () {
      return initLoginButton(props);
    };
    document.head.appendChild(script);
  }
};
var LoginNaver = /** @class */ (function (_super) {
  __extends(LoginNaver, _super);
  function LoginNaver() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  LoginNaver.prototype.componentDidMount = function () {
    if (isServer()) {
      return;
    }
    appendNaverButton();
    loadScript(this.props);
  };
  LoginNaver.prototype.render = function () {
    var render = this.props.render;
    return render({
      onClick: function () {
        if (!document || !document.querySelector('#naverIdLogin').firstChild) return;
        var naverLoginButton = document.querySelector('#naverIdLogin').firstChild;
        naverLoginButton.click();
      },
    });
  };
  return LoginNaver;
})(React.Component);

exports.default = LoginNaver;
//# sourceMappingURL=index.js.map
