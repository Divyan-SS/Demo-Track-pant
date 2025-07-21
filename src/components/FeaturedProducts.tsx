import React from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const brands = ["Nike", "Adidas", "Puma", "HRX", "Under Armour", "Reebok"];
const styles = ["Women", "Sports", "Jogger", "Zipper", "Classic", "Vintage"];

const FeaturedProducts = () => {
  const products = brands.flatMap((brand, bIndex) =>
    styles.map((style, sIndex) => ({
      id: `${brand}-${style}`,
      brand,
      name: `${brand} ${style} Track Pant`,
      price: `₹${999 + sIndex * 100}`,
      originalPrice: sIndex % 2 === 0 ? `₹${1299 + sIndex * 100}` : null,
      image: `/src/assets/${brand.toLowerCase().replace(/\s/g, '')}/${style.toLowerCase()}.jpg`,
      rating: 4 + ((sIndex + bIndex) % 2) * 0.5,
      isNew: sIndex === 0 || sIndex === 1
    }))
  );

  return (
    <section className="py-20 bg-[#f8f9fa] text-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Track Pant Showcase
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Browse trending track pants from top sportswear brands
          </p>
        </div>

        {brands.map((brand, index) => (
          <div key={brand} className="mb-20 relative">
            <h3 className="text-2xl text-center font-extrabold text-slate-700 mb-6 tracking-wide">
              {brand}
            </h3>

            <div className="relative">
              <button
                className={`swiper-button-prev-${index} absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 p-2 rounded-full shadow`}
              >
                <ChevronLeft className="w-6 h-6 text-slate-800" />
              </button>
              <button
                className={`swiper-button-next-${index} absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white hover:bg-gray-100 p-2 rounded-full shadow`}
              >
                <ChevronRight className="w-6 h-6 text-slate-800" />
              </button>

              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  nextEl: `.swiper-button-next-${index}`,
                  prevEl: `.swiper-button-prev-${index}`,
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                loop={true}
                slidesPerView={1.2}
                spaceBetween={20}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  768: { slidesPerView: 2.5 },
                  1024: { slidesPerView: 3.5 },
                }}
              >
                {products
                  .filter((p) => p.brand === brand)
                  .map((product) => (
                    <SwiperSlide key={product.id}>
                      <div className="min-w-[250px] max-w-[250px] bg-white text-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 left-3 flex gap-2">
                            {product.isNew && (
                              <span className="bg-green-500 text-white px-2 py-1 text-xs rounded-full font-medium">
                                NEW
                              </span>
                            )}
                            {product.originalPrice && (
                              <span className="bg-red-500 text-white px-2 py-1 text-xs rounded-full font-medium">
                                SALE
                              </span>
                            )}
                          </div>
                          <button className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow hover:text-red-500 transition">
                            <Heart className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="p-4">
                          <div className="flex items-center mb-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < Math.floor(product.rating)
                                    ? 'text-amber-400 fill-current'
                                    : 'text-gray-300'
                                }`}
                              />
                            ))}
                            <span className="text-sm text-gray-500 ml-2">
                              ({product.rating})
                            </span>
                          </div>

                          <h4 className="text-md font-semibold text-gray-800 mb-1 line-clamp-1">
                            {product.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-lg font-bold text-gray-800">
                                {product.price}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  {product.originalPrice}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
