import { Box, Card, Typography, CardContent } from "@mui/material"
import concierto from '../../assets/concierto.png'
import wine from '../../assets/wine.png'

const Eventos = () => {

    const cardData = [
        {
            title: "Conciert",
            descripcion: ' Fecha',
            descripcion2: 'Hora',
            imageUrl: concierto,
        },
        {
            title: "Wine Night",
            descripcion: ' Fecha',
            descripcion2: 'Hora',
            imageUrl: wine,
        },
        {
            title: "Concierto",
            descripcion: ' Fecha',
            descripcion2: 'Hora',
            imageUrl: concierto,
        },
    ];

    return (
        <Box sx={{ width: { xs: '100%', sm: '100%', md: '888px' }, mx: "auto", paddingTop: '5%' }}>
            <Typography variant="h3" sx={{ fontSize: '25px', fontWeight: '500', fontFamily: 'jost', textAlign: { sm: 'left', xs: 'center' }, padding: '10px' }}>
                Eventos
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, gap: '127px', flexDirection: { xs: 'column', md: 'row' } }}>
                {cardData.map((card, index, index2) => (
                    <Box key={index} sx={{ mx: 'auto' }} >

                        <Card sx={{
                            width: '210px',
                            height: '337px',
                            backgroundImage: `url(${card.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            borderRadius: '16px',
                        }}>
                            <CardContent sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                backgroundColor: 'rgba(0,0,0,0.5)', // opcional para un efecto de sombreado
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%', // Asegúrate de que el Box ocupe todo el alto de la Card
                                    justifyContent: 'space-between', // Separa el contenido superior del inferior
                                    textAlign: 'center'
                                }}>
                                    <Box sx={{
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Typography variant="h5" component="div" sx={{ color: 'white', fontWeight: '700', fontSize: '25px', fontFamily: 'jost' }}>
                                            {card.title}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ p: 2 }}>
                                        <Typography variant="subtitle1" component="div" sx={{ color: 'white', fontWeight: '600', fontSize: '16px', fontFamily: 'jost' }}>
                                            {card.descripcion}
                                        </Typography>
                                        <Typography variant="subtitle1" component="div" sx={{ color: 'white', fontWeight: '600', fontSize: '16px', fontFamily: 'jost' }}>
                                            {card.descripcion2}
                                        </Typography>
                                    </Box>
                                </Box>

                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Eventos