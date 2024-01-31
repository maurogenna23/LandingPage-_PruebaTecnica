import React from 'react';
import { Card, CardContent, Typography, Grid, CardMedia, Box } from '@mui/material';
import Piscina from '../../assets/Ellipse 1.svg'
import Sauna from '../../assets/Ellipse 1.png'
import Spa from '../../assets/Ellipse 1 (6).png'
import Discoteca from '../../assets/Ellipse 1 (1).png'
import Desayunos from '../../assets/Ellipse 1 (2).png'
import Gimnasio from '../../assets/Ellipse 1 (3).png'
import Animaciones from '../../assets/Ellipse 1 (4).png'
import Transporte from '../../assets/Ellipse 1 (5).png'

interface CardData {
    title: string;
    imageUrl: string;
}

const Servicios = () => {
    const cardData: CardData[] = [
        { title: "Piscina", imageUrl: Piscina },
        { title: "Spa", imageUrl: Spa },
        { title: "Sauna", imageUrl: Sauna },
        { title: "Discoteca", imageUrl: Discoteca },
        { title: "Desayunos", imageUrl: Desayunos },
        { title: "Gimnasio", imageUrl: Gimnasio },
        { title: "Animaciones", imageUrl: Animaciones },
        { title: "Transporte", imageUrl: Transporte },

    ];

    return (
        <Box sx={{ width: { xs: '100%', sm: '100%', md: '888px' }, mx: "auto", paddingTop: '5%' }}>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: '500', fontFamily: 'jost', textAlign: { sm: 'left', xs: 'center' }, padding: '10px' }}>
                Servicios
            </Typography>
            <Grid container spacing={2}>
                {cardData.map((card, index) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        xl={3}
                        key={index}
                    >
                        <Card sx={{
                            textAlign: 'center', boxShadow: '0px 2.767px 2.214px 0px rgba(174, 150, 114, 0.02), 0px 6.65px 5.32px 0px rgba(174, 150, 114, 0.03), 0px 12.522px 10.017px 0px rgba(174, 150, 114, 0.04), 0px 22.336px 17.869px 0px rgba(174, 150, 114, 0.04), 0px 41.778px 33.422px 0px rgba(174, 150, 114, 0.05), 0px 100px 80px 0px rgba(174, 150, 114, 0.07)', mx: '20px', borderRadius: '20px', '&:hover': {
                                backgroundColor: '#ECECEC',
                                transform: 'translateY(-5px)',
                                cursor: 'pointer'
                            }, transition: 'transform 0.3s ease, background-color 0.3s ease',
                        }}>
                            <CardMedia
                                component="img"
                                image={card.imageUrl}
                                alt={card.title}
                                sx={{ width: '100px', height: '100px', borderRadius: '50%', margin: 'auto', marginTop: 2 }}
                            />
                            <CardContent>
                                <Typography variant="h6" sx={{ fontWeight: '500', fontSize: '20px', fontFamily: 'jost' }}>
                                    {card.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default Servicios;
