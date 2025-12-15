const e=`{
  "prettier.configPath": "packages/config-utils/.prettierrc",
  "workbench.editor.customLabels.enabled": true,
  "workbench.editor.customLabels.patterns": {
    "**/packages/**/*": "[\${dirname(-3)}] \${filename}",
  }
}
`;export{e as S};
