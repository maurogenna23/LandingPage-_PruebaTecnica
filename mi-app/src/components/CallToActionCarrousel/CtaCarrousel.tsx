import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from "@mui/material";
// import { IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box } from "@mui/material";
import hotel from '../../assets/Rectangle 176.png'

const CtaCarrousel = () => {

    type ArrowProps = {
        className?: string;
        style?: React.CSSProperties;
        onClick?: () => void;
    };

    const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
        <ArrowForwardIos onClick={onClick} className={className} sx={{
            color: 'white', width: '25px', height: '25px', '&:hover': {
                color: 'gray'
            }, transition: 'color 0.3s ease', display: { xs: 'none', md: 'block' }
        }} />
    );

    const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => (
        <ArrowBackIos onClick={onClick} className={className} sx={{
            color: 'white', width: '25px', height: '25px', '&:hover': {
                color: 'gray'
            }, transition: 'color 0.3s ease', display: { xs: 'none', md: 'block' }
        }} />
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 5000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };


    const dishes = [
        {
            name: "Nombre de la habitación", texto: "Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus. Enim ipsum nisi gravida massa odio. Volutpat fermentum.", imageUrl: hotel, button: <Button
                variant="contained"
                sx={{
                    color: '#AE9672',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    width: { sm: '359px', xs: '250px' },
                    fontSize: '20px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                    , fontFamily: 'Inter'
                }}
            >
                Hacer reservación
            </Button>
        },
        {
            name: "Nombre de la habitación", texto: "Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus. Enim ipsum nisi gravida massa odio. Volutpat fermentum.", imageUrl: hotel, button: <Button
                variant="contained"
                sx={{
                    color: '#AE9672',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    width: { sm: '359px', xs: '250px' },
                    fontSize: '20px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                    , fontFamily: 'Inter'
                }}
            >
                Hacer reservación
            </Button>
        },
        {
            name: "Nombre de la habitación", texto: "Lorem ipsum dolor sit amet consectetur. Eu felis risus quis nisi lectus. Enim ipsum nisi gravida massa odio. Volutpat fermentum.", imageUrl: hotel, button: <Button
                variant="contained"
                sx={{
                    color: '#AE9672',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    width: { sm: '359px', xs: '250px' },
                    fontSize: '20px',
                    fontWeight: '600',
                    textTransform: 'capitalize'
                    , fontFamily: 'Inter'
                }}
            >
                Hacer reservación
            </Button>
        }
    ];

    return (
        <Box sx={{ backgroundColor: '#AE9672', marginTop: '5%' }}>
            <Box sx={{ width: { xs: '100%', md: '80%' }, mx: "auto" }}>
                <Slider {...settings}>
                    {dishes.map((dish, index) => (
                        <Box key={index} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '40px 0px',
                            flexDirection: { xs: 'column', lg: 'row' }
                        }}>
                            <Card sx={{
                                display: 'flex',
                                width: '99%',
                                mx: 'auto',
                                gap: { xs: '24px', md: '56px' },
                                backgroundColor: 'transparent',
                                boxShadow: 'none',
                                flexDirection: { xs: 'column', lg: 'row' }
                            }}>
                                <CardMedia
                                    component="img"
                                    height="350px"
                                    width="250px"
                                    sx={{ borderRadius: '10px' }}
                                    image={dish.imageUrl}
                                    alt={dish.name}
                                />

                                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '24px', color: 'white' }}>
                                    <Typography gutterBottom variant="h5" sx={{ fontWeight: '800', fontSize: '31px', lineHeight: 'normal', fontStyle: 'normal', fontFamily: 'Inter' }} component="div">
                                        {dish.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: 'justify', fontSize: '19px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', fontFamily: 'Inter' }} >
                                        {dish.texto}
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: 'justify', fontSize: '19px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', fontFamily: 'Inter' }} >
                                        {dish.texto}
                                    </Typography>
                                    <Box sx={{ mx: 'auto' }}>
                                        {dish.button}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    );
};

export default CtaCarrousel;

