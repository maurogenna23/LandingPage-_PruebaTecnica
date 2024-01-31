import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import almuerzo1 from '../../assets/Rectangle 159.png'
import almuerzo2 from '../../assets/Rectangle 159 (1).png'
import almuerzo3 from '../../assets/Rectangle 159 (2).png'


const Almuerzos = () => {

    type ArrowProps = {
        className?: string;
        style?: React.CSSProperties;
        onClick?: () => void;
    };

    const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
        <ArrowForwardIos onClick={onClick} className={className} sx={{
            color: '#AE9672', width: '25px', height: '25px', '&:hover': {
                color: 'gray'
            }, transition: 'color 0.3s ease', display: { xs: 'none', md: 'block' }
        }} />
    );

    const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
        <ArrowBackIos onClick={onClick} className={className} sx={{
            color: '#AE9672', width: '25px', height: '25px', '&:hover': {
                color: 'gray'
            }, transition: 'color 0.3s ease', display: { xs: 'none', md: 'block' }
        }} />
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 5000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };


    const dishes = [
        { name: "Nombre", price: "00.00$", imageUrl: almuerzo1 },
        { name: "Nombre", price: "00.00$", imageUrl: almuerzo2 },
        { name: "Nombre", price: "00.00$", imageUrl: almuerzo3 }
    ];

    return (
        <Box sx={{ width: { xs: '100%', sm: '100%', md: '888px' }, mx: "auto", paddingTop: '5%' }}>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: '500', fontFamily: 'jost', textAlign: { sm: 'left', xs: 'center' }, padding: '10px' }}>
                Almuerzos
            </Typography>

            <Slider {...settings}>
                {dishes.map((dish, index) => (
                    <Box key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>

                            <Card sx={{ height: 273, width: 210, borderRadius: '20px', padding: '16px', gap: '24px', boxShadow: '0px 2.76726px 2.21381px 0px #AE967205, 0px 6.65010px 5.32008px 0px #AE967207, 0px 12.5216px 10.0172px 0px #AE967209, 0px 22.3363px 17.8690px 0px #AE96720B, 0px 41.7776px 33.4221px 0px #AE96720D, 0px 100px 80px 0px #AE967212', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <CardMedia
                                    component="img"
                                    height="162"
                                    width="178"
                                    sx={{ borderRadius: '10px' }}
                                    image={dish.imageUrl}
                                    alt={dish.name}
                                />

                                <CardContent sx={{ textAlign: 'center' }}>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: '600', fontSize: '16px', lineHeight: 'normal', fontFamily: 'Inter' }} component="div">
                                        {dish.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: '400', fontSize: '10px', lineHeight: 'normal', fontFamily: 'Inter' }} >
                                        {dish.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Almuerzos;

