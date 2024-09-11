'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import '../styles/MerchSlider.css';

// Custom arrow components (unchanged)
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
}

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey" }}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
}

const formatPrice = (price) => {
  return (price / 100).toFixed(2);
};

const MerchSlider = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/printify-items'); 
        console.log('THE RESPONSE', "\n\n", response.data)
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setSelectedVariant(item.variants[0]); // Set the first variant as default
    setIsPanelOpen(true);
  };

  const closePanel = () => {
    setIsPanelOpen(false);
    setSelectedItem(null);
    setSelectedVariant(null);
  };

  const handleVariantSelect = (e) => {
    const variantId = parseInt(e.target.value, 10); // Convert the selected value to an integer
    const variant = selectedItem.variants.find(v => v.id === variantId);
    setSelectedVariant(variant);
  };

  // Slider settings (unchanged)
  const outerSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const innerSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <section id='merch' className="merch-section">
        <div className='title'>
            <span>MERCH</span>
            <h2 id='sec-ti'>Get Yourself Some Goodies</h2>
            <img className='divider' src='divider.svg'/>
        </div>

      <Slider {...outerSliderSettings}>
        {items.map((item) => (
          <div key={item.id} className="merch-item" onClick={() => handleItemClick(item)}>
            <Slider {...innerSliderSettings}>
              {item.images.map((mockup, index) => (
                <div key={index} className="mockup-slide">
                  <img src={mockup.src} alt={`Product Mockup ${index + 1}`} />
                </div>
              ))}
            </Slider>
            <h2 className="merch-title">{item.title}</h2>
            <p className="merch-price">From ${formatPrice(item.variants[0].price)}</p>
          </div>
        ))}
      </Slider>

      {selectedItem && (
        <motion.div
          className="purchase-panel"
          initial={{ x: '100%' }}
          animate={{ x: isPanelOpen ? 0 : '100%' }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          <button className="close-button" onClick={closePanel}>X</button>
          <img src={selectedItem.images[0].src} alt={selectedItem.title} className="panel-image" />
          <h2>{selectedItem.title}</h2>
          <div className='description' dangerouslySetInnerHTML={{__html: selectedItem.description}} />
          
          <div className="variant-selection">
            <select onChange={handleVariantSelect} value={selectedVariant?.id || ''}>
              <option value="">Select a variant</option>
              {selectedItem.variants.map(variant => (
                <option key={variant.id} value={variant.id}>
                  {variant.title}
                </option>
              ))}
            </select>
          </div>

          {selectedVariant && (
            <p className="panel-price">Selected: {selectedVariant.title} - ${formatPrice(selectedVariant.price)}</p>
          )}

          <button 
            className={`buy-button ${selectedVariant ? 'active' : 'disabled'}`}
            disabled={!selectedVariant}
            onClick={() => {
              if (selectedVariant) {
                // Implement your purchase logic here
                console.log('Purchasing:', selectedItem.title, 'Variant:', selectedVariant.title);
              }
            }}
          >
            Buy Now
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default MerchSlider;