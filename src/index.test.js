// @flow
import pluginTester from 'babel-plugin-tester'
import plugin from '.'

pluginTester({
  title: 'default',
  plugin,
  babelOptions: { parserOpts: { plugins: ['jsx', 'classProperties'] } },
  snapshot: true,
  tests: [
    {
      title: 'code',
      code: `
class Display extends React.Component {
  // @displayName
  static On = () => <div>On</div>
  static Off = () => <div>Off</div>
  render() {
    return <div>{this.props.children}</div>
  }
}
  `,
    },
  ],
})
