import * as React from 'react';
import { Button, Typography, Box } from '@mui/material';
import backgroundImage from '../../assets/backgroundHero.jpeg';

const Hero = () => {
    return (
        <Box
            sx={{
                height: { xs: 400, sm: 500 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(90%)',
                width: '100%'
            }}
        >
            <Typography sx={{
                fontFamily: 'jost',
                fontWeight: '900',
                fontSize: { xs: '36px', sm: '48px' },
                lineHeight: { xs: '52px', sm: '69.36px' },
                color: '#F5F5F5',
                textShadow: '0px 5px 4px rgba(0, 0, 0, 0.5)',
                filter: 'brightness(110%)',
                textAlign: 'center',
            }}>
                Nombre del Hotel
            </Typography>
            <Button
                variant="contained"
                sx={{
                    color: '#AE9672',
                    backgroundColor: 'white',
                    borderRadius: '10px',
                    '&:hover': {
                        backgroundColor: '#ECECEC',
                        transform: 'translateY(-5px)',
                    },
                    width: { xs: '250px', sm: '359px' },
                    marginTop: '20px',
                    fontSize: { xs: '16px', sm: '20px' },
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    transition: 'transform 0.3s ease, background-color 0.3s ease',
                    filter: 'brightness(110%)',
                }}
            >
                Hacer Reserva
            </Button>
        </Box>
    );
};

export default Hero;
