/* eslint-disable import/no-commonjs, id-length */
const css = require("css")
const get = require("lodash/get")
const camelCase = require("lodash/camelCase")

module.exports = function index(source) {
  const result = [ "const obj={" ]

  const parsedCss = css.parse(source)
  const rules = get(parsedCss, "stylesheet.rules")
  if (rules) {
    const rootRules = rules.filter((rule) => get(rule, "selectors", []).includes(":root"))
    const declarations = rootRules
      .map((rule) => get(rule, "declarations", []))
      .reduce((prev, cur) => prev.concat(cur), [])

    declarations.forEach((decl) => {
      result.push(`"${camelCase(decl.property)}": "${decl.value}",`)
    })
  }

  result.push("}")
  result.push("module.exports = obj")
  return result.join("\n")
}
