function compareArrays(arr1, arr2) {
 return arr1.length === arr2.length && arr1.every((element, index) => arr2[index] === element);
}

function getUsersNamesInAgeRange(users, gender) {
  const filteredUsers = users.filter((item) => item.gender === gender);
  const ages = filteredUsers.map(element => element.age);

  const average = ages.reduce((acc, item, index, arr) => {
    acc += item / arr.length;
   return acc;
  }, 0);

  return average;
}