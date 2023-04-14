## react18.2源码调试环境

生成sourceMap，使用vite在开发环境调试react。

## Usage

1. 项目根目录安装 react 依赖
```bash
yarn
```

2. 构建react
```bash
yarn build-debug
```

3. 进入 vite-debug 目录安装依赖，启动服务开始调试
```bash
cd ./vite-debug
pnpm i
pnpm dev
```

[react18.2源码](https://github.com/facebook/react/tree/v18.2.0)

## Q&A

### react依赖安装问题

```bash
node node_modules/fbjs-scripts/node/check-dev-engines.js package.json && node ./scripts/flow/createFlowConfigs.js && node ./scripts/yarn/downloadReactIsForPrettyFormat.js
TypeError [ERR_INVALID_PROTOCOL]: Protocol "https:" not supported. Expected "http:"
```

删除终端代理配置，重试即可。