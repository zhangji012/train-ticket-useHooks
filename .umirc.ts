import { IConfig } from 'umi-types';
import path, { resolve } from "path";

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'train-ticket-useHooks',
      dll: true,
      locale: {
        enable: true,
        default: 'en-US',
      },
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  alias: {
    "@": resolve(__dirname, "./src"),
  },
  uglifyJSOptions: {
    uglifyOptions: {
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }
  },
  proxy: {
    "/api": {
      "target": "http://39.96.69.24",
      "changeOrigin": true,
      "pathRewrite": { "^/api" : "" }
    }
  },
}

export default config;
