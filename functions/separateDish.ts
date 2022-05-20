export const separteDish = (foods: any[], category: string) => {
  const toReturnDish: any = [];
  foods.forEach((food: any) => {
    if (food.category === category) toReturnDish.push(food);
    else if (food.category === category) toReturnDish.push(food);
  });
  return toReturnDish;
};
