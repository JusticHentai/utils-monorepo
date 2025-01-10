# Config-parsing

A tool that can parse custom configuration files like `xxx.config.js | ts | json`

[中文文档](https://juejin.cn/post/7133433459766198280/)

## Install

```bash
npm i @justichentai/config-parsing
```

## Usage

The path is the relative path of the configuration file to the runtime directory

```ts
import configParsing from '@justichentai/config-parsing'

const res1 = await configParsing('./my.config.ts')

const res2 = await configParsing('./my.config.js')

const res3 = await configParsing('./my.config.json')
```

## Api

```ts
/**  
 * parse custom configuration files
 * @param filePath The path is the relative path of the configuration file to the runtime directory
 */  
declare function configParsing(filePath: string): Promise<any>;  
  
export { configParsing as default };
```
