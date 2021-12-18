
import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://penji.co/wp-content/uploads/2019/06/clothing-startups.jpg"
                    alt="First slide"
                    height={480}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://thumbs.dreamstime.com/b/sale-shop-happy-girl-woman-buy-cartoon-clothes-vector-illustration-female-customer-character-fashion-store-discount-retail-215329109.jpg"
                    alt="Second slide"
                    height={480}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://visme.co/blog/wp-content/uploads/2020/12/Sales-Banner-Design-Ideas-7.jpg"
                    alt="Third slide"
                    height={480}
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;