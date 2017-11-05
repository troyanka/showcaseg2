import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
    HashRouter,
} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import basePath from './basePath';
import store from './store';

import ShowcaseHeader from './custom_content/modules/showcase-header';
import ShowcaseFooter from './custom_content/modules/showcase-footer';


import ModuleNavBreadcrumbsRoute from './custom_content/modules/moduleNavBreadcrumbsRoute';


import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './system/style/index.css';
//const css = require('./App.css');

ReactDOM.render(
    <Provider store={store}>
    <HashRouter>
      <div id="wc_showcase_root" className="wc_showcase_root">

        <div className="wcContainer">


            <ShowcaseHeader />
            <ModuleNavBreadcrumbsRoute />
            <hr/>
            <ShowcaseFooter/>


        <basePath/>

        </div>
      </div>
    </HashRouter>
    </Provider>
    ,
    document.getElementById('wc-showcase-root')
    //getParentElement()
    //document.getElementById('root')
);
registerServiceWorker();
