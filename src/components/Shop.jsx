import React from "react";
import { FaStar, FaShoppingCart, FaEye, FaHeart } from "react-icons/fa";

const Shop = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      name: "Apple AirPods Pro",
      price: "Rs 24,999",
      description:
        "Active noise cancellation for immersive sound. Comfortable, lightweight design.",
      image:
        "https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg",
      discount: "Rs 22,999",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Sony WH-CH710N",
      price: "Rs 12,999",
      description:
        "Wireless noise-canceling headphones with 35-hour battery life.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKl7748tK-oo7uXriGQfrAaSpE7Iivy3AQig&s",
      discount: "Rs 11,499",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Logitech MX Master 3",
      price: "Rs 9,999",
      description:
        "Advanced wireless mouse with ultra-fast scrolling and ergonomic design.",
      image:
        "https://cdn.panacompu.com/cdn-img/blog-article-content/logitech-mx-master-3-scroll-wheel.jpg?width=600&height=350&fixedwidthheight=false",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Samsung T7 SSD",
      price: "Rs 8,499",
      description:
        "Compact and fast storage with up to 1050MB/s transfer speeds.",
      image:
        "https://ae01.alicdn.com/kf/S482124933025483eaee126360d026436K.jpg",
      discount: "Rs 7,999",
      rating: 4.9,
    },
    {
      id: 5,
      name: "Amazon Echo Dot ",
      price: "Rs 4,999",
      description:
        "Smart speaker with Alexa, perfect for voice control and smart home management.",
      image:
        "https://www.techhive.com/wp-content/uploads/2023/04/amazon-echo-dot-fourth-gen-main-100862962-orig-7.jpeg?quality=50&strip=all",
      rating: 4.6,
    },
    {
      id: 6,
      name: "OnePlus Nord Buds",
      price: "Rs 2,999",
      description:
        "True wireless earbuds with 30-hour battery life and fast charging.",
      image:
        "https://i.pcmag.com/imagery/reviews/064D0aPKkhuuMulUKNGJUjq-10.fit_lim.size_1050x.jpg",
      discount: "Rs 2,499",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Canon EOS M50 Mark II",
      price: "Rs 59,999",
      description:
        "Mirrorless camera with 4K video, perfect for vlogging and photography.",
      image:
        "https://shop.sg.canon/media/wysiwyg/canon-insider/canon-eos-m50-mark-ii_2083-01.jpeg",
      rating: 4.7,
    },
    {
      id: 8,
      name: "HP Pavilion x360",
      price: "Rs 64,999",
      description:
        "Convertible laptop with touchscreen, ideal for work and entertainment.",
      image:
        "https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08353938.png",
      discount: "Rs 59,999",
      rating: 4.6,
    },


      {
        id: 17,
        name: "Apple Watch Series 8",
        price: "Rs 45,999",
        description:
          "Advanced health monitoring, GPS, and always-on Retina display.",
        image:
          "https://cdn.gadgetbytenepal.com/wp-content/uploads/2022/09/Apple-Watch-Series-8-Starlight-Aluminum.jpg",
        rating: 4.7,
      },
      {
        id: 18,
        name: "Samsung Galaxy Buds 2",
        price: "Rs 14,999",
        description:
          "True wireless earbuds with active noise cancellation and premium sound quality.",
        image:
          "https://hips.hearstapps.com/hmg-prod/images/samsung-galaxy-buds2-sq-1628705322.jpg",
        discount: "Rs 13,499",
        rating: 4.6,
      },
      {
        id: 19,
        name: "Dell XPS 13",
        price: "Rs 1,29,999",
        description:
          "Ultra-thin and lightweight laptop with InfinityEdge display.",
        image:
          "https://i.dell.com/sites/csimages/Video_Imagery/all/laptop-xps-13-9345-pdp-design-dynamic-thumb-sl.png",
        discount: "Rs 1,19,999",
        rating: 4.8,
      },
      {
        id: 20,
        name: "Google Pixel 7 Pro",
        price: "Rs 79,999",
        description:
          "Flagship smartphone with a powerful camera and Tensor G2 chip.",
        image:
          "https://cdn.gadgetbytenepal.com/wp-content/uploads/2022/10/Google-Pixel-7-Pro-Snow.jpg",
        discount: "Rs 74,999",
        rating: 4.7,
      },
  ];

  // Function to render star ratings
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-yellow-400" : "text-gray-300"}
        />
      );
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-orange-600 mt-4 mb-8">
          Shop
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.discount && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Sale
                  </div>
                )}
                <div className="absolute bottom-2 left-2 flex space-x-2">
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                    <FaHeart className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300">
                    <FaEye className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-lg font-bold text-green-600">
                    {product.price}
                  </p>
                  {product.discount && (
                    <p className="text-sm text-gray-500 line-through">
                      {product.discount}
                    </p>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  {renderRating(product.rating)}
                  <button
                    onClick={() => addToCart(product)}
                    className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300"
                  >
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;