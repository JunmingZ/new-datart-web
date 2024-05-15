import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// 定位组件的插件 快捷键Ctrl + Shift + Alt + c
import { Inspector } from 'react-dev-inspector';
import { store } from './redux/store.ts';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Inspector>
        <App />
      </Inspector>
    </Provider>
  </React.StrictMode>
);
