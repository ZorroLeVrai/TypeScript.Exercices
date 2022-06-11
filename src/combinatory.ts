//This is the combinatory exercice (please see Language exercices 16)
type Element = number | string;

function getAllPossibilities(lst:Array<Element>, nb:number, isCombinatory:boolean): Array<Array<Element>>
{
  if (nb <= 0)
    return [[]];

  if (lst.length < nb)
    return [];

  const result: Array<Array<Element>> = [];

  for (let i=0; i<lst.length; ++i)
  {
    const currentElement = lst[i];
    const reducedLst = isCombinatory ? lst.slice(i+1) : lst.slice(0,i).concat(lst.slice(i+1));
    for (let arrangement of getAllPossibilities(reducedLst, nb-1, isCombinatory))
    {
      result.push(arrangement.concat(currentElement));
    }
  }

  return result;
}

function getArrangemenments(lst:Array<Element>, nb:number): Array<Array<Element>>
{
  return getAllPossibilities(lst, nb, false);
}

function getCombinations(lst:Array<Element>, nb:number): Array<Array<Element>>
{
  return getAllPossibilities(lst, nb, true);
}

function display(combination:Array<Array<Element>>)
{
  for (let i=0; i<combination.length; ++i)
  {
    console.log(combination[i]);
  }
}

module.exports = {
  getArrangemenments,
  getCombinations,
  display
};