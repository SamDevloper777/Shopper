"use client"
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const customers = [
  {
    name: "Tania Andrew",
    email: "tania@gmail.com",
    price: 400,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    email: "john@gmail.com",
    price: 420,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    email: "alexa@gmail.com",
    price: 340,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    email: "richard@gmail.com",
    price: 520,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    email: "levi@gmail.com",
    price: 780,
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];

export function CartList({order}) {
  const [cartData,setCartData] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3000/api/order")
    .then(res =>res.json())
    .then(res => setCartData(res));
  },[])
  return (
    <Card className="w-full">
      <CardBody>
        
        <div className="divide-y divide-gray-200">
          {cartData.order?.items?.map((orderItem, index) => (
            <div
              key={index}
              className="flex items-center justify-between pb-3 pt-3 last:pb-0"
            >
              <div className="flex items-center gap-x-3">
                <Avatar size="xxl" variant="rounded" src={`/productImages/${orderItem.item.image}`} alt="" />
                <div>
                  <Typography color="blue-gray" variant="h6">
                    {orderItem.item.name}
                  </Typography>
                  <Typography variant="small" color="gray">
                    {orderItem.quantity}
                  </Typography>
                </div>
              </div>
              <Typography color="blue-gray" variant="h6">
                {orderItem.price}
              </Typography>
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
