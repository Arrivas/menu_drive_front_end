export const separteDish = (foods: any) => {
  const filipinoDish = foods.filter(
    (food: any) => food.category === 'filipino'
  );
  const chineseDish = foods.filter((food: any) => food.category === 'chinese');
  return {
    filipinoDish,
    chineseDish,
  };
};
