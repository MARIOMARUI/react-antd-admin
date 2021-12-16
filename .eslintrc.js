module.exports = {
  root: true,
  plugins: ["@typescript-eslint"],
  extends: ["react-app", "react-app/jest", "airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/quotes": ["warn", "double"], // 字符串使用双引号
    "object-curly-newline": "off", // 不限制大括号换行
    "linebreak-style": "off", // 不限制换行符的格式
    "import/order": "off", // 不限制模块引入顺序
    "import/prefer-default-export": "off", // 不必须有默认导出
    "operator-linebreak": "off", // 不对运算符换行做限制
    "react/require-default-props": "off", // 不加组件的默认值
    "@typescript-eslint/lines-between-class-members": ["warn", "never"], // 类之间没有空格
    "react/destructuring-assignment": "off", // 不强制解构赋值
    "react/jsx-wrap-multilines": [
      // 多行jsx的括号处理
      "warn",
      {
        declaration: "parens",
        assignment: "parens",
        return: "parens",
        arrow: "parens",
        condition: "ignore",
        logical: "ignore",
        prop: "ignore",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn"], // 没有用到的变量
    "arrow-body-style": "off", // 不用函数体的括号规则
    "@typescript-eslint/indent": "off", // 空格数不做强制
    "react/jsx-props-no-spreading": "off", // 可以展开属性
    "no-restricted-syntax": "off", // 不限制语法
    "max-len": "off", // 不限制长度
    "implicit-arrow-linebreak": "off", // 不限制箭头函数行数
  },
};
