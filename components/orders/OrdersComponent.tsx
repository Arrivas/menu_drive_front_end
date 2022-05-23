import { useState } from 'react';
import { Tab } from '@headlessui/react';
import MainLayout from '../MainLayout';
import OrderItems from './OrderItems';
import Loading from '../Loading';

interface OrdersComponentProps {
  user: any;
  orderHistory: any;
}

const OrdersComponent: React.FC<OrdersComponentProps> = ({
  user,
  orderHistory,
}) => {
  const [activeTab, setActiveTab] = useState<string>('Serving');
  const tabItems = [
    { id: 1, text: 'Serving' },
    { id: 2, text: 'To Rate' },
  ];
  const pendingOrders: any = [];
  const completedOrders: any = [];

  if (orderHistory) {
    orderHistory?.filter((order: any) => {
      if (
        order.orderStatus.status === 'pending payment' ||
        order.orderStatus.status === 'serving'
      )
        pendingOrders.push(order);
      else if (order.orderStatus.status === 'completed')
        completedOrders.push(order);
    });
  }
  return (
    <>
      {orderHistory ? (
        <MainLayout title="Orders">
          <div className="flex items-center justify-center font-roboto">
            <div className="pt-10 h-[550px] xs:h-screen w-[290px] xs:w-[375px] font-roboto relative px-2 xs:px-5">
              <Tab.Group>
                <Tab.List className="outline-none focus:outline-none">
                  <div className="flex w-full items-center justify-center">
                    {tabItems.map((item) => (
                      <Tab
                        key={item.id}
                        onClick={() => setActiveTab(item.text)}
                        className="w-full"
                      >
                        <h1>{item.text}</h1>
                        <hr
                          className={`border ${
                            activeTab === item.text
                              ? 'border-black'
                              : 'border-gray-300'
                          } rounded-full w-[100%]`}
                        />
                      </Tab>
                    ))}
                  </div>
                </Tab.List>
                <Tab.Panels>
                  <Tab.Panel className="py-5">
                    <div className="overflow-auto h-[30rem] max-h-screen flex flex-col">
                      {pendingOrders.map((p: any) => (
                        <OrderItems
                          key={p.orderStatus.orderDate}
                          orderStatus={p.orderStatus}
                          orderedFoods={p.orderedFoods}
                        />
                      ))}
                    </div>
                  </Tab.Panel>
                  <Tab.Panel className="py-5">
                    <div className="overflow-auto h-[30rem] max-h-screen flex flex-col gap-5">
                      {completedOrders.map((p: any) => (
                        <OrderItems
                          key={p.orderStatus.orderDate}
                          orderStatus={p.orderStatus}
                          orderedFoods={p.orderedFoods}
                        />
                      ))}
                    </div>
                  </Tab.Panel>
                </Tab.Panels>
              </Tab.Group>
            </div>
          </div>
        </MainLayout>
      ) : (
        <Loading loading={true} />
      )}
    </>
  );
};

export default OrdersComponent;

// key={p.food.id}
// name={p.food.name}
// img={p.food.img}
// servingTime={p.food.servingTime}
// paidStatus={p.orderStatus.status}
// paid={p.orderStatus.paid}
