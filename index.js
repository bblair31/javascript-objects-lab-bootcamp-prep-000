var recipes = {
  prop: '1'
}

function updateObjectWithKeyAndValue(recipes, prop2, value) {
  return Object.assign({}, recipes,)
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes[prop2] = '2'
  return recipes
}