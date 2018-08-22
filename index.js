var recipes = {
  prop: '1'
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, prop2, value) {
  recipes[prop2] = '2'
  return recipes
}