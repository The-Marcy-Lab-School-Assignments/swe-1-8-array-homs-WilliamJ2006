const filterVipUsers = (users, vipUserIdsSet) => {
  return users.filter(object => vipUserIdsSet.has(object.id))
};

const multiplicativeAverage = (nums) => {
  return nums.reduce((accumulator, currentValue) => accumulator * currentValue) / nums.length;
};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};
