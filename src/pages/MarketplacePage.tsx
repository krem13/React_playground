import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TruckCard from "../components/TruckCard";

const trucks = [
  {
    page: "/marketplace/used-truck-1",
    id: "0",
    name: "Marcelis-Getz Vita",
    type: "Panel van",
    startPrice: "37000",
    currency: "US dollars",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6vq0mbwhIOmdu8DwysjfkJ6UtcIQ9yl3xaFxYPg-zS55pYjTuk7cDlhRFVTZ7Jf9Y1sc&usqp=CAU",
    logoUrl: "images/logos/logo1",
    specifications: {
      energySource: "Diesel",
      gvwrMin: "3,000",
      gvwrMax: "5,000",
      payloadMin: "952",
      payloadMax: "2,594",
      capacityMin: "7",
      capacityMax: "17",
    },
    timestamp: "",
  },
  {
    page: "/marketplace/used-truck-2",
    id: "1",
    name: "Marcelis-Getz Vita",
    type: "Panel van",
    startPrice: "37000",
    currency: "US dollars",
    pictureUrl:
      "https://d2v1gjawtegg5z.cloudfront.net/posts/preview_images/000/015/155/original/fordpickup.png?1717090124",
    logoUrl: "images/logos/logo1",
    specifications: {
      energySource: "Diesel",
      gvwrMin: "3,000",
      gvwrMax: "5,000",
      payloadMin: "952",
      payloadMax: "2,594",
      capacityMin: "7",
      capacityMax: "17",
    },
    timestamp: "",
  },
  {
    page: "/marketplace/used-truck-3",
    id: "2",
    name: "Marcelis-Getz Vita",
    type: "Panel van",
    startPrice: "37000",
    currency: "US dollars",
    pictureUrl:
      "https://assets.newatlas.com/dims4/default/38f7c6f/2147483647/strip/true/crop/1919x1079+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2F2019-ford-f150-limited-review-16.jpg",
    logoUrl: "images/logos/logo1",
    specifications: {
      energySource: "Diesel",
      gvwrMin: "3,000",
      gvwrMax: "5,000",
      payloadMin: "952",
      payloadMax: "2,594",
      capacityMin: "7",
      capacityMax: "17",
    },
    timestamp: "",
  },
  {
    page: "/marketplace/used-truck-4",
    id: "3",
    name: "Marcelis-Getz Vita",
    type: "Panel van",
    startPrice: "37000",
    currency: "US dollars",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmaMmlglTeMtfr0z_FNZJvkcSMjSEoCgpnvOpgfg9fJPdFb4HN3JnXQ9kxrAsVu2ihBsY&usqp=CAU",
    logoUrl: "images/logos/logo1",
    specifications: {
      energySource: "Diesel",
      gvwrMin: "3,000",
      gvwrMax: "5,000",
      payloadMin: "952",
      payloadMax: "2,594",
      capacityMin: "7",
      capacityMax: "17",
    },
    timestamp: "",
  },
  {
    page: "/marketplace/used-truck-5",
    id: "4",
    name: "Marcelis-Getz Vita",
    type: "Panel van",
    startPrice: "37000",
    currency: "US dollars",
    pictureUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlF833w8LiPkntDSAK08whNcLZ0iVjY2Px5Trv0zNykO8Y1j8ikgZh1l8j9R5OidXqEww&usqp=CAU",
    logoUrl: "images/logos/logo1",
    specifications: {
      energySource: "Diesel",
      gvwrMin: "3,000",
      gvwrMax: "5,000",
      payloadMin: "952",
      payloadMax: "2,594",
      capacityMin: "7",
      capacityMax: "17",
    },
    timestamp: "",
  },
];

export default function FormPage() {
  return (
    <>
      <ScrollToTop />
      <div className="mb-16 flex flex-col text-center items-center justify-center">
        <h1 className="text-4xl font-semibold mt-10 mb-24 text-gray-900">
          Used trucks marketplace
        </h1>
        <div className="block md:grid md:grid-cols-3 md:gap-5">
          {trucks.map((truck) => (
            <TruckCard
              id={truck.id}
              name={truck.name}
              page={truck.page}
              type={truck.type}
              startPrice={truck.startPrice}
              currency={truck.currency}
              pictureUrl={truck.pictureUrl}
              logoUrl={truck.logoUrl}
              specifications={truck.specifications}
              timestamp={truck.timestamp}
            />
          ))}
        </div>
      </div>
    </>
  );
}
