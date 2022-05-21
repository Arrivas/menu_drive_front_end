export const getCartTotalPrice = (cartItemsData: any) => {
  const prices: any = [];
  cartItemsData?.filter((item: any) => prices.push(item.price * item.qty));
  return prices.reduce((acc: number, curr: number) => acc + curr, 0);
};
