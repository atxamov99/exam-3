import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Heart, Plus, Grid3X3, Calendar, Tag } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const gamesData = [
  {
    id: 1,
    title: "Elden Ring",
    description: "THE NEW FANTASY ACTION RPG. Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.",
    price: "$59.99",
    mainImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    tags: ["Souls-like", "RPG", "Dark Fantasy", "Open-world"]
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    description: "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    price: "$49.99",
    mainImage: "https://images.pexels.com/photos/1000366/pexels-photo-1000366.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      "https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    tags: ["Cyberpunk", "Action", "RPG", "Futuristic"]
  },
  {
    id: 3,
    title: "The Witcher 3",
    description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will.",
    price: "$39.99",
    mainImage: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400",
      "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=400"
    ],
    tags: ["Fantasy", "RPG", "Adventure", "Open-world"]
  }
];

const specialOffers = [
  {
    id: 1,
    title: "The Last of Us: Part 1",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=300&h=169",
    discount: "-20%",
    price: "$47.99",
    originalPrice: "$59.99",
    platform: "PlayStation",
    date: "Until Nov 2"
  },
  {
    id: 2,
    title: "Iratus: Lord of the Dead",
    image: "https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=300&h=169",
    discount: "-87%",
    price: "$3.89",
    originalPrice: "$29.99",
    platform: "PC",
    date: "Until Nov 6"
  },
  {
    id: 3,
    title: "Beyond: Two Souls",
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=300&h=169",
    discount: "-60%",
    price: "$7.99",
    originalPrice: "$19.99",
    platform: "PC",
    date: "Only Today"
  }
];

const browseCategories = [
  {
    id: 1,
    title: "Action",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=200&h=150",
    color: "from-red-900 to-red-700"
  },
  {
    id: 2,
    title: "RPG",
    image: "https://images.pexels.com/photos/1666065/pexels-photo-1666065.jpeg?auto=compress&cs=tinysrgb&w=200&h=150",
    color: "from-purple-900 to-purple-700"
  },
  {
    id: 3,
    title: "Free-to-Play",
    image: "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=200&h=150",
    color: "from-blue-900 to-blue-700"
  },
  {
    id: 4,
    title: "Anime",
    image: "https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=200&h=150",
    color: "from-green-900 to-green-700"
  },
  {
    id: 5,
    title: "Co-Op",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=200&h=150",
    color: "from-orange-900 to-orange-700"
  }
];

const freeToPlayGames = [
  {
    id: 1,
    title: "Destiny 2",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1085660/header.jpg",
    platform: "Windows",
    price: "Free"
  },
  {
    id: 2,
    title: "Halo Infinite",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/1240440/header.jpg",
    platform: "Windows",
    price: "Free"
  },
  {
    id: 3,
    title: "Team Fortress 2",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/440/header.jpg",
    platform: "Windows",
    price: "Free"
  }
];

function GameNav() {
  // Swiper navigation and pagination refs
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const pagRef = useRef(null);

  // Special Offers state
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % specialOffers.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + specialOffers.length) % specialOffers.length)
  }

  return (
    <main className="bg-gradient-to-b from-[#0f0c1b] via-[#232b3a] to-[#232b3a] min-h-screen py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-white text-lg font-bold mb-6">FEATURED</h2>
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{
              clickable: true,
              el: pagRef.current,
              bulletClass: 'swiper-pagination-bullet-custom',
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.params.pagination.el = pagRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
              swiper.pagination.init();
              swiper.pagination.render();
              swiper.pagination.update();
            }}
            className="game-swiper"
          >
            {gamesData.map((game) => (
              <SwiperSlide key={game.id}>
                <div className="flex bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden min-h-[500px]">
                  {/* Main Game Image */}
                  <div className="flex-1 relative">
                    <img
                      src={game.mainImage}
                      alt={game.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/60"></div>
                  </div>

                  {/* Game Details */}
                  <div className="flex-1 p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-4xl font-bold text-white mb-6 tracking-wide">
                        {game.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed mb-8">
                        {game.description}
                      </p>
                      {/* Screenshots Grid */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {game.screenshots.map((screenshot, index) => (
                          <div key={index} className="relative group cursor-pointer">
                            <img
                              src={screenshot}
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-24 object-cover rounded transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded"></div>
                          </div>
                        ))}
                      </div>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {game.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded hover:bg-slate-600/50 transition-colors cursor-pointer"
                          >
                            {tag}
                          </span>
                        ))}
                        <button className="w-8 h-8 bg-slate-700/50 rounded flex items-center justify-center hover:bg-slate-600/50 transition-colors">
                          <Plus className="w-4 h-4 text-gray-300" />
                        </button>
                        <button className="w-8 h-8 bg-slate-700/50 rounded flex items-center justify-center hover:bg-slate-600/50 transition-colors ml-auto">
                          <Grid3X3 className="w-4 h-4 text-gray-300" />
                        </button>
                      </div>
                    </div>
                    {/* Bottom Actions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                          <Heart className="w-5 h-5" />
                          <span>Wishlist</span>
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-white">{game.price}</span>
                        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition-colors">
                          Buy Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Custom Navigation Buttons */}
          <button
            ref={prevRef}
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/30 hover:bg-black/50 rounded-full flex items-center justify-center transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-blue-400 transition-colors" />
          </button>
          {/* Custom Pagination */}
          <div ref={pagRef} className="swiper-pagination-custom flex justify-center gap-2 mt-6"></div>
        </div>
      </div>

      {/* Special Offers Section */}
      <div className="min-h-screen text-white">
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Special Offers</h2>
            <button className="text-blue-400 hover:text-blue-300 transition-colors">
              See more
            </button>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Game Cards */}
            <div className="flex gap-4 overflow-hidden">
              {specialOffers.map((game, index) => (
                <div
                  key={game.id}
                  className={`min-w-[300px] bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 cursor-pointer group ${
                    index === currentSlide ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="relative">
                    <img
                      src={game.image}
                      alt={game.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 right-2">
                      <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      {game.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span>{game.date}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-bold">
                          {game.discount}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-lg font-bold text-green-400">{game.price}</span>
                          <span className="text-sm text-gray-500 line-through">{game.originalPrice}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Tag className="w-3 h-3" />
                        <span>{game.platform}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            
          </div>
          {/* Slide Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {specialOffers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
        </div>

        {/* Browse Steam Section */}
        <div className="px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            
          </div>

          {/* Browse Steam Section */}
<div className="px-6 py-8">
  <div className="flex justify-between items-center mb-6">
    <h2 className="text-2xl font-bold text-white">Browse Steam</h2>
    <button className="text-blue-400 hover:text-blue-300 transition-colors">
      See more
    </button>
  </div>

  <div className="relative">
    {/* Swiper for categories */}
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={24}
      slidesPerView={3}
      navigation={{
        prevEl: '.cat-swiper-prev',
        nextEl: '.cat-swiper-next',
      }}
      pagination={{
        clickable: true,
        el: '.cat-swiper-pagination',
        bulletClass: 'swiper-pagination-bullet-custom',
        bulletActiveClass: 'swiper-pagination-bullet-active-custom',
      }}
      loop={true}
      className="category-swiper"
      onInit={swiper => {
        swiper.params.navigation.prevEl = document.querySelector('.cat-swiper-prev');
        swiper.params.navigation.nextEl = document.querySelector('.cat-swiper-next');
        swiper.params.pagination.el = document.querySelector('.cat-swiper-pagination');
        swiper.navigation.init();
        swiper.navigation.update();
        swiper.pagination.init();
        swiper.pagination.render();
        swiper.pagination.update();
      }}
    >
      {browseCategories.map((category) => (
        <SwiperSlide key={category.id}>
          <div className="min-w-[200px] h-32 rounded-lg overflow-hidden cursor-pointer group relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
            <img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-xl font-bold text-white text-center drop-shadow-lg">
                {category.title}
              </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    {/* Navigation Arrows */}
    <button className="cat-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 p-2 rounded-full transition-colors">
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button className="cat-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 p-2 rounded-full transition-colors">
      <ChevronRight className="w-6 h-6" />
    </button>
    {/* Pagination */}
    <div className="cat-swiper-pagination flex justify-center gap-2 mt-6"></div>
  </div>
</div>
        </div>
      </div>

      <div className="bg-[#232b3a] p-8 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-bold">Free-to-Play Games</h2>
        <button className="text-gray-400 hover:text-white transition-colors">See more</button>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          pagination={{
            clickable: true,
            el: pagRef.current,
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom',
          }}
          loop={true}
          onInit={swiper => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.params.pagination.el = pagRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
          }}
        >
          {freeToPlayGames.map(game => (
            <SwiperSlide key={game.id}>
              <div className="bg-[#1b2230] rounded-lg p-4 flex flex-col h-full">
                <img
                  src={game.image}
                  alt={game.title}
                  className="rounded mb-4 w-full h-40 object-cover"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white text-lg font-semibold mb-2">{game.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                      <span>
                        <svg width="16" height="16" fill="currentColor"><rect width="16" height="16" rx="3" /></svg>
                      </span>
                      <span>{game.platform}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-gray-300">{game.price}</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded font-semibold text-sm transition-colors">
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 p-2 rounded-full transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
        {/* Pagination */}
        <div ref={pagRef} className="flex justify-center gap-2 mt-6"></div>
      </div>
    </div>  
    </main>
  );
}

export default GameNav;