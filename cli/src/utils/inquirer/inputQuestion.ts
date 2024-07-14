import inquirer from 'inquirer'
import { error } from '../style/chalk'

/**
 * 输入型提问 的 参数类型
 */
export type InputQuestion = Array<{
  name: string // 变量名
  message: string // 提问文案
  default?: string // 默认回复
  validate?: (param: string) => boolean // 验证答案是否通过
}>

/**
 * 输入型提问
 */
export default async function inputQuestionConfig(
  questions: InputQuestion
): Promise<Record<string, string>> {
  const myQuestion = []

  for (const item of questions) {
    const question = {
      type: 'input',
      ...item,
    }

    myQuestion.push(question)
  }

  const [template, err] = await inquirer
    .prompt(myQuestion)
    .then((e) => [e, null])
    .catch((e) => [null, e])

  err && error(err)

  return template
}
