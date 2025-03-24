import React from "react";
import { FaStar, FaShoppingCart, FaEye, FaHeart,FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import bg from "../assets/video/bg.mp4";

const Home = () => {
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
        
      ];
    
      const reviews = [
        {
          id: 1,
          name: "Binod joshi",
          rating: 5,
          review:
            "This product is amazing! The quality is top-notch, and it exceeded my expectations. Highly recommended!",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUIbig1oqXim1tFNSjQzqRL5KYc9mxOSYR_A&s", // Placeholder image URL
        },
        {
          id: 2,
          name: "priya chaudhary",
          rating: 4.5,
          review:
            "Great value for the price. The product works perfectly, and the delivery was super fast.",
          image:
            "https://sharedp.com/wp-content/uploads/2024/06/cute-cartoon-pic-girl-960x1024.jpg", // Placeholder image URL
        },
        {
          id: 3,
          name: "Nishan chaudhary",
          rating: 5,
          review:
            "I absolutely love this product! It has made my life so much easier. Thank you, E-Shop!",
          image:
            "https://i.pinimg.com/736x/c7/bb/8f/c7bb8f71f4c50e240fe0427fb433ffb3.jpg", // Placeholder image URL
        },
        {
          id: 4,
          name: "Ram kumar ",
          rating: 4,
          review:
            "Good product with excellent features. The customer service was also very helpful.",
          image:
            "https://i.pinimg.com/736x/ce/4f/e6/ce4fe69c28d88d966c190d0d98e9eeab.jpg", // Placeholder image URL
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden mb-12">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={bg} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to E-Shop
          </h1>
          <p className="text-xl text-gray-200 mb-6">
            Discover the best products at amazing prices!
          </p>
          <a
            href="/shop"
            className="bg-red-400 text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-red-500 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>

      {/* Product Cards */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
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
                  <button className="p-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-300">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="bg-gray-100 py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{review.name}</h3>
                  <div className="flex justify-center mt-2">
                    {renderRating(review.rating)}
                  </div>
                </div>
                <div className="mt-4 relative">
                  <FaQuoteLeft className="text-gray-400 absolute top-0 left-0" />
                  <p className="text-gray-700 italic pl-6 pr-6">
                    {review.review}
                  </p>
                  <FaQuoteRight className="text-gray-400 absolute bottom-0 right-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Image Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
                {renderRating(product.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;