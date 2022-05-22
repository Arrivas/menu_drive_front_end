export const separteDish = (foods: any[], category: string) => {
  if (foods.length === 0) return;
  const toReturnDish: any = [];
  foods.forEach((food: any) => {
    if (food.category === category) toReturnDish.push(food);
    else if (food.category === category) toReturnDish.push(food);
    else if (category === 'all') toReturnDish.push(food);
  });
  return toReturnDish;
};
