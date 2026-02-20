import { Node, Project, SyntaxKind } from 'ts-morph'

enum TYPE {
  FUNCTION,
  CLASS,
  VARIABLE,
  ENUM,
  INTERFACE,
  TYPE,
}

interface ExportInfo {
  name: string
  type: TYPE
  description: string
  parameters?: string
  returnType?: string
  properties?: string
}

export const analyzeExports = (indexFiles: string[]) => {
  const project = new Project({
    tsConfigFilePath: 'tsconfig.json',
  })

  for (const indexFile of indexFiles) {
    const sourceFile = project.addSourceFileAtPath(indexFile)
    const exports: ExportInfo[] = []

    const namedExports = sourceFile.getExportedDeclarations()

    for (const [name, declarations] of namedExports) {
      for (const declaration of declarations) {
        const info = analyzeDeclaration(declaration, name)
        info && exports.push(info)
      }
    }

    generateMarkdownTable(exports)
  }
}

const analyzeDeclaration = (
  declaration: Node,
  exportName: string
): ExportInfo | null => {
  switch (declaration.getKind()) {
    case SyntaxKind.ArrowFunction: {
      return arrowFunctionHandler(declaration, exportName)
    }

    case SyntaxKind.FunctionDeclaration: {
      return functionHandler(declaration, exportName)
    }

    case SyntaxKind.ClassDeclaration: {
      return classHandler(declaration, exportName)
    }

    case SyntaxKind.VariableDeclaration: {
      return variableHandler(declaration, exportName)
    }

    case SyntaxKind.EnumDeclaration: {
      return enumHandler(declaration, exportName)
    }

    case SyntaxKind.InterfaceDeclaration: {
      return interfaceHandler(declaration, exportName)
    }

    case SyntaxKind.TypeAliasDeclaration: {
      return typeAliasHandler(declaration, exportName)
    }

    default:
      return null
  }
}

const functionHandler = (declaration: Node, exportName: string) => {
  const funcDecl = declaration.asKindOrThrow(SyntaxKind.FunctionDeclaration)
  const jsdoc = funcDecl.getJsDocs()[0]
  const description = jsdoc ? jsdoc.getDescription().trim() : ''

  const params = funcDecl.getParameters()
  const paramStr = params
    .map((p) => {
      const name = p.getName()
      const type = p.getType().getText()
      const paramJsDoc = jsdoc
        ?.getTags()
        .find(
          (tag) =>
            tag.getTagName() === 'param' && tag.getCommentText()?.includes(name)
        )
      const paramDesc = paramJsDoc
        ? paramJsDoc.getCommentText()?.replace(`${name} `, '')
        : ''
      return `${name}: ${type}${paramDesc ? ` (${paramDesc})` : ''}`
    })
    .join(', ')

  const returnType = funcDecl.getReturnType().getText()

  return {
    name: exportName,
    type: 'Function',
    kind: 'function',
    description,
    parameters: paramStr || '无',
    returnType: returnType === 'void' ? '无返回值' : returnType,
  }
}

const classHandler = (declaration: Node, exportName: string) => {
  const classDecl = declaration.asKindOrThrow(SyntaxKind.ClassDeclaration)
  const jsdoc = classDecl.getJsDocs()[0]
  const description = jsdoc ? jsdoc.getDescription().trim() : ''

  const properties = classDecl.getProperties()
  const methods = classDecl.getMethods()
  const constructor = classDecl.getConstructors()[0]

  let propStr = ''
  if (properties.length > 0) {
    propStr += `属性: ${properties
      .map((p) => {
        const name = p.getName()
        const type = p.getType().getText()
        return `${name}: ${type}`
      })
      .join(', ')}`
  }

  if (methods.length > 0) {
    if (propStr) propStr += '; '
    propStr += `方法: ${methods
      .map((m) => {
        const name = m.getName()
        const params = m.getParameters()
        const paramStr = params
          .map((p) => `${p.getName()}: ${p.getType().getText()}`)
          .join(', ')
        return `${name}(${paramStr})`
      })
      .join(', ')}`
  }

  let constructorParams = ''
  if (constructor) {
    const params = constructor.getParameters()
    constructorParams = params
      .map((p) => `${p.getName()}: ${p.getType().getText()}`)
      .join(', ')
  }

  return {
    name: exportName,
    type: 'Class',
    kind: 'class',
    description: description || '类定义',
    parameters: constructorParams || '无参数',
    properties: propStr || '无',
  }
}

const arrowFunctionHandler = (declaration: Node, exportName: string) => {
  const arrowFunc = declaration.asKindOrThrow(SyntaxKind.ArrowFunction)

  // 获取箭头函数上的 JSDoc
  const jsdoc = arrowFunc.getJsDocs()[0]
  const description = jsdoc ? jsdoc.getDescription().trim() : '箭头函数'

  // 获取参数
  const params = arrowFunc.getParameters()
  const paramStr = params
    .map((p) => {
      const name = p.getName()
      const type = p.getType().getText()
      const paramJsDoc = jsdoc
        ?.getTags()
        .find(
          (tag) =>
            tag.getTagName() === 'param' && tag.getCommentText()?.includes(name)
        )
      const paramDesc = paramJsDoc
        ? paramJsDoc.getCommentText()?.replace(`${name} `, '')
        : ''
      return `${name}: ${type}${paramDesc ? ` (${paramDesc})` : ''}`
    })
    .join(', ')

  // 获取返回类型
  const returnType = arrowFunc.getReturnType().getText()

  console.log('=== arrowFunctionHandler ===', {
    name: exportName,
    type: 'Function',
    kind: 'function',
    description,
    parameters: paramStr || '无',
    returnType: returnType === 'void' ? '无返回值' : returnType,
  })

  return {
    name: exportName,
    type: 'Function',
    kind: 'function',
    description,
    parameters: paramStr || '无',
    returnType: returnType === 'void' ? '无返回值' : returnType,
  }
}

const variableHandler = (declaration: Node, exportName: string) => {
  const varDecl = declaration.asKindOrThrow(SyntaxKind.VariableDeclaration)

  // 递归向上查找有 JSDoc 的父节点
  const findJsDoc = (node: Node): any => {
    const jsdoc = node?.getJsDocs?.()?.[0]
    if (jsdoc) {
      return jsdoc
    }
    const parent = node.getParent()
    if (parent) {
      return findJsDoc(parent)
    }
    return null
  }

  const jsdoc = findJsDoc(varDecl)

  console.log(
    '=== jsdoc2 ===',
    jsdoc?.getTags().map((t: any) => {
      return {
        name: t.getTagName(),
        text: t.getText(),
      }
    })
  )

  const initializer = varDecl.getInitializer()

  if (initializer?.getKind() === SyntaxKind.ArrowFunction) {
    return arrowFunctionHandler(initializer, exportName)
  }

  const description = ''

  const text = varDecl.getInitializer()?.getText()
  let type = TYPE.VARIABLE
  if (text?.startsWith('(')) {
    type = TYPE.FUNCTION
  }

  console.log('=== description ===', {
    name: exportName,
    type: 'Variable',
    kind: 'variable',
    description,
    returnType: type,
  })

  return {
    name: exportName,
    type,
    description,
    returnType: type,
  }
}

const enumHandler = (declaration: Node, exportName: string) => {
  const enumDecl = declaration.asKindOrThrow(SyntaxKind.EnumDeclaration)
  const jsdoc = enumDecl.getJsDocs()[0]
  const description = jsdoc ? jsdoc.getDescription().trim() : '枚举类型'

  const members = enumDecl.getMembers()
  const memberStr = members
    .map((m) => {
      const name = m.getName()
      const value = m.getValue()
      return `${name} = ${JSON.stringify(value)}`
    })
    .join(', ')

  return {
    name: exportName,
    type: 'Enum',
    kind: 'enum',
    description,
    properties: memberStr,
  }
}

const interfaceHandler = (declaration: Node, exportName: string) => {
  const interfaceDecl = declaration.asKindOrThrow(
    SyntaxKind.InterfaceDeclaration
  )
  const jsdoc = interfaceDecl.getJsDocs()[0]
  const description = jsdoc ? jsdoc.getDescription().trim() : '接口定义'
  const properties = interfaceDecl.getProperties()
  const propStr = properties
    .map((p) => {
      const name = p.getName()
      const type = p.getType().getText()
      const optional = p.hasQuestionToken() ? '?' : ''
      return `${name}${optional}: ${type}`
    })
    .join(', ')

  return {
    name: exportName,
    type: 'Interface',
    kind: 'interface',
    description,
    properties: propStr,
  }
}

const typeAliasHandler = (declaration: Node, exportName: string) => {
  const typeDecl = declaration.asKindOrThrow(SyntaxKind.TypeAliasDeclaration)
  const jsdoc = typeDecl.getJsDocs()[0]
  const description = jsdoc ? jsdoc.getDescription().trim() : '类型别名'

  const type = typeDecl.getType().getText()

  return {
    name: exportName,
    type: 'Type',
    kind: 'type',
    description,
    returnType: type,
  }
}

const generateMarkdownTable = (exports: ExportInfo[]) => {
  console.log('# 导出内容分析\n')
  console.log('| 名称 | 类型 | 描述 | 详细信息 |')
  console.log('|------|------|------|----------|')

  for (const exp of exports) {
    let details = ''

    if (exp.kind === 'function') {
      details = `参数: ${exp.parameters}; 返回值: ${exp.returnType}`
    } else if (exp.kind === 'class') {
      details = `构造函数参数: ${exp.parameters}; ${exp.properties}`
    } else if (exp.kind === 'variable') {
      details = `类型: ${exp.returnType}`
    } else if (exp.kind === 'enum') {
      details = `成员: ${exp.properties}`
    } else if (exp.kind === 'interface' || exp.kind === 'type') {
      details = exp.properties
        ? `属性: ${exp.properties}`
        : `类型: ${exp.returnType}`
    }

    const name = exp.name === 'default' ? `${exp.name} (test1)` : exp.name
    const description = exp.description || '无描述'

    console.log(`| ${name} | ${exp.type} | ${description} | ${details} |`)
  }

  console.log('\n---\n')
  console.log(`共分析了 ${exports.length} 个导出项`)
}
