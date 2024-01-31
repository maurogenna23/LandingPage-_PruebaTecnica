import { Box, Button, Typography } from "@mui/material";
import CtaCarrousel from "./components/CallToActionCarrousel/CtaCarrousel";
import Almuerzos from "./components/CarrouselFoods/Almuerzos";
import Bebidas from "./components/CarrouselFoods/Bebidas";
import DesayunosYCenas from "./components/CarrouselFoods/DesayunosyCenas";
import Postres from "./components/CarrouselFoods/Postres";
import Eventos from "./components/Eventos/eventos";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Servicios from "./components/Servicios/servicios";
import Footer from "./components/Footer/footer";


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Box>
        <Typography sx={{ textAlign: 'center', fontSize: '25px', fontWeight: '500', fontFamily: 'jost', fontStyle: 'normal', marginTop: '80px' }}>
          Tus recomendaciones
        </Typography>
      </Box>
      <Almuerzos />
      <DesayunosYCenas />
      <Postres />
      <Bebidas />
      <CtaCarrousel />
      <Eventos />
      <Servicios />
      <Box sx={{ textAlign: 'center', paddingTop: '5%' }}>
        <Typography variant="h6" sx={{ fontWeight: '700', fontSize: { sm: '32px', xs: '25px' }, color: '#AE9672', fontFamily: 'jost' }}>
          Clasifica tu experiencia
        </Typography>
        <Button variant="contained"
          sx={{
            color: 'white',
            backgroundColor: 'black',
            borderRadius: '20px',
            '&:hover': {
              backgroundColor: 'black',
              transform: 'translateY(-5px)',
            },
            width: { sm: '338px', xs: '200px' },
            fontSize: '16px',
            padding: '8px 16px',
            fontWeight: '500',
            textTransform: 'capitalize',
            marginTop: '24px',
            transition: 'transform 0.3s ease, background-color 0.3s ease',
            fontFamily: 'jost'
          }}
        >
          Clasificar
        </Button>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
