// @flow weak
import template from 'babel-template'

const DISPLAY_NAME = '@displayName'

const buildDisplayName = template(`
CLASS.PROP.displayName = VALUE;
`)

function shouldDisplayName(comments) {
  return (
    comments &&
    comments.find(comment => {
      return comment.value.trim() === DISPLAY_NAME
    })
  )
}

export default ({ types: t }) => {
  return {
    name: 'babel-plugin-display-name',
    visitor: {
      ClassProperty(path) {
        if (path.node.static && shouldDisplayName(path.node.leadingComments)) {
          const classNode = path.findParent(parent =>
            parent.isClassDeclaration(),
          )
          if (classNode) {
            const className = classNode.get('id').node.name
            const prop = path.get('key').node.name
            classNode.insertAfter(
              buildDisplayName({
                CLASS: t.identifier(className),
                PROP: t.identifier(prop),
                VALUE: t.stringLiteral(`${className}.${prop}`),
              }),
            )
          }
        }
      },
    },
  }
}
