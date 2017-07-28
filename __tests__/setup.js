jest.mock('Linking', () => {
    return {
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        requestPermissions: jest.fn(),
        openURL: jest.fn(),
        canOpenURL: jest.fn(),
        getInitialURL: jest.fn()
    }
});

jest.mock('react-native-svg', () => {
  const React = require('react')
  // eslint-disable-next-line no-undef
  const ReactNativeSvg = jest.genMockFromModule('react-native-svg')

  const svgElementMockGenerator = (name, propTypes) => {
    function SvgMock() {
      return (
        React.createElement(name, null, null)
      )
    }

    SvgMock.displayName = name
    SvgMock.propTypes = propTypes

    return SvgMock
  }

  const Svg = svgElementMockGenerator('Svg', ReactNativeSvg.Svg.propTypes)

  Svg.Rect = svgElementMockGenerator('Rect', ReactNativeSvg.Rect.propTypes)
  Svg.LinearGradient = svgElementMockGenerator(
    'LinearGradient',
    ReactNativeSvg.LinearGradient.propTypes
  )
  Svg.Polygon = svgElementMockGenerator('Polygon', ReactNativeSvg.Path.propTypes)
  Svg.Path = svgElementMockGenerator('Path', ReactNativeSvg.Path.propTypes)
  Svg.Symbol = svgElementMockGenerator('Symbol', ReactNativeSvg.Symbol.propTypes)
  Svg.Use = svgElementMockGenerator('Use', ReactNativeSvg.Use.propTypes)
  Svg.Stop = svgElementMockGenerator('Stop', ReactNativeSvg.Stop.propTypes)
  Svg.Defs = svgElementMockGenerator('Defs', ReactNativeSvg.Defs.propTypes)

  return Svg
})
