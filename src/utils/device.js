const size = {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px'
};

export default sizeWidth => ({
  mobile: `(${sizeWidth}-width: ${size.mobile})`,
  tablet: `(${sizeWidth}-width: ${size.tablet})`,
  desktop: `(${sizeWidth}-width: ${size.desktop})`,
});