

const fontConfigs = {
   light:100,
   regular:400,
   medium:500,
   bold:800
}

const returnFontWeight = (style) => {
   return fontConfigs[style.toLowerCase()]
}
console.log(returnFontWeight('light'));
console.log(returnFontWeight('regular'));
console.log(returnFontWeight('Light'));
console.log(returnFontWeight('bOLd'));
