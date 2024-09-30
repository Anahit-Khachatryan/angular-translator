export function propertyLook(path: string, obj: any) {
  const props = path.split('.');
//   console.log('props', props)
//   let result = obj;
//   for(let prop of props) {
//     result = result[prop];
//   }
//   return result

  return props.reduce((obj, key) => {
    return obj[key]
  }, obj)
}