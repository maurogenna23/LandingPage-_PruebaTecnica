import { Image } from "@mui/icons-material"
import { Box, Typography, List, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import twitter from "../../assets/simple-icons_x.png"
import linkedin from "../../assets/mdi_linkedin.png"


const Footer = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (

        <Box>
            {!isMobile ? (

                <Box sx={{ backgroundColor: '#AE9672', marginTop: '5%', paddingTop: '48px', paddingBottom: '48px' }}>

                    {/* seccion 1 */}
                    <Box sx={{ display: 'flex', gap: '120px', alignItems: 'center', justifyContent: 'center' }}>
                        <Box sx={{ display: 'flex', width: '30%' }}>
                            <Typography sx={{ padding: '20px', fontSize: '32px', fontWeight: '700', color: 'white', display: 'flex', alignItems: 'center', fontFamily: 'Montserrat' }}>
                                Logo
                            </Typography>
                            <Box
                                sx={{
                                    borderLeft: '2px solid white', // Color negro para la línea
                                    height: '100%', // Ajusta la altura según sea necesario
                                    padding: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',

                                }}
                            >
                                <Typography sx={{ fontWeight: '700', color: 'white', fontFamily: 'Montserrat' }}>
                                    About us
                                </Typography>
                                <Typography sx={{ fontWeight: '300', color: 'white', fontSize: '12px', fontFamily: 'Montserrat' }}>
                                    Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor hendrerit nunc felis aliquet urna mollis quam.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Seccion 2 */}
                        <Box >
                            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'white', fontFamily: 'Montserrat' }}>
                                Quick Links
                            </Typography>
                            <Box sx={{
                                '& ul': {
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                },
                                '& li': {
                                    position: 'relative',
                                    paddingLeft: '1em',
                                    '&::before': {
                                        content: '"•"',
                                        position: 'absolute',
                                        left: 0,
                                        color: 'white',
                                    }
                                }
                            }}>
                                <List sx={{ color: 'white' }}>
                                    <ListItem >
                                        <ListItemText primary="Input" sx={{
                                            '.MuiListItemText-primary': {
                                                fontSize: '12px', fontWeight: '300', fontFamily: 'Montserrat', ':hover': {
                                                    textDecoration: 'underline',
                                                    cursor: 'pointer'
                                                },
                                            }
                                        }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Input" sx={{
                                            '.MuiListItemText-primary': {
                                                fontSize: '12px', fontWeight: '300', fontFamily: 'Montserrat', ':hover': {
                                                    textDecoration: 'underline',
                                                    cursor: 'pointer'
                                                },
                                            }
                                        }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Input" sx={{
                                            '.MuiListItemText-primary': {
                                                fontSize: '12px', fontWeight: '300', fontFamily: 'Montserrat', ':hover': {
                                                    textDecoration: 'underline',
                                                    cursor: 'pointer'
                                                },
                                            }
                                        }} />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                            <Box >
                                <Box
                                    component="img"
                                    sx={{
                                        height: '32px',
                                        width: '32px',
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                        margin: '5px',
                                        ':hover': {
                                            transform: 'translateY(-5px)',
                                            cursor: 'pointer'
                                        },
                                        transition: 'transform 0.3s ease, background-color 0.3s ease',
                                    }}
                                    alt="Descripción de la imagen"
                                    src={twitter}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: '32px',
                                        width: '32px',
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                        margin: '5px',
                                        ':hover': {
                                            transform: 'translateY(-5px)',
                                            cursor: 'pointer'
                                        },
                                        transition: 'transform 0.3s ease, background-color 0.3s ease',

                                    }}
                                    alt="Descripción de la imagen"
                                    src={linkedin}
                                />
                            </Box>
                            <Box>
                                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: 'white', fontFamily: 'Montserrat', margin: '5px' }}>
                                    asdasd@asd.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '35px', }}>
                        <Typography sx={{ color: 'white', fontSize: '20px', fontWeight: '700', fontFamily: 'Montserrat' }}>
                            2023 Nombre. All right reserved
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
                            <Typography sx={{
                                fontSize: '12px', color: 'white', fontFamily: 'Montserrat', ':hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                },
                            }}>
                                Terminos y condiciones
                            </Typography>
                            <Typography sx={{
                                fontSize: '12px', color: 'white', fontFamily: 'Montserrat', ':hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                },
                            }}>
                                Politicas de privacidad
                            </Typography>
                            <Typography sx={{
                                fontSize: '12px', color: 'white', fontFamily: 'Montserrat', ':hover': {
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                },
                            }}>
                                Seguridad
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box sx={{ backgroundColor: '#AE9672', marginTop: '5%', paddingTop: '48px', paddingBottom: '48px' }}>

                    {/* seccion 1 */}
                    <Box sx={{ display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', width: '100%', flexDirection: 'column' }}>

                            <Box sx={{ mx: 'auto' }}>
                                <Typography sx={{ padding: '20px', fontSize: '32px', fontWeight: '700', color: 'white', display: 'flex', alignItems: 'center', fontFamily: 'Montserrat', textAlign: 'center' }}>
                                    Logo
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    borderTop: '2px solid white',
                                    height: '100%',
                                    padding: '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '80%',
                                    mx: 'auto'
                                }}
                            >
                                <Typography sx={{ fontWeight: '700', color: 'white', fontFamily: 'Montserrat' }}>
                                    About us
                                </Typography>
                                <Typography sx={{ fontWeight: '300', color: 'white', fontSize: '12px', fontFamily: 'Montserrat' }}>
                                    Lorem ipsum dolor sit amet consectetur. Eget est diam pharetra porttitor malesuada facilisi. Dui lorem eget morbi diam. Sit justo vitae venenatis est nunc vel tellus auctor. Odio tincidunt tempor hendrerit nunc felis aliquet urna mollis quam.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Seccion 2 */}
                        <Box >
                            <Typography sx={{ fontSize: '16px', fontWeight: '700', color: 'white', fontFamily: 'Montserrat' }}>
                                Quick Links
                            </Typography>
                            <Box sx={{
                                '& ul': {
                                    listStyle: 'none',
                                    padding: 0,
                                    margin: 0,
                                },
                                '& li': {
                                    position: 'relative',
                                    paddingLeft: '1em',
                                    '&::before': {
                                        content: '"•"',
                                        position: 'absolute',
                                        left: 0,
                                        color: 'white',
                                    }
                                }
                            }}>
                                <List sx={{ color: 'white' }}>
                                    <ListItem >
                                        <ListItemText primary="Input" sx={{
                                            '.MuiListItemText-primary': {
                                                fontSize: '12px', fontWeight: '300', fontFamily: 'Montserrat', textAlign: 'center'
                                            }
                                        }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Input" sx={{ '.MuiListItemText-primary': { fontSize: '12px', fontWeight: '300', fontFamily: 'Montserrat', textAlign: 'center' } }} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary="Input" sx={{ '.MuiListItemText-primary': { fontSize: '12px', fontWeight: '300', fontFamily: 'Montserrat', textAlign: 'center' } }} />
                                    </ListItem>
                                </List>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                            <Box >
                                <Box
                                    component="img"
                                    sx={{
                                        height: '32px',
                                        width: '32px',
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                        margin: '5px'
                                    }}
                                    alt="Descripción de la imagen"
                                    src={twitter}
                                />
                                <Box
                                    component="img"
                                    sx={{
                                        height: '32px',
                                        width: '32px',
                                        maxHeight: { xs: 233, md: 167 },
                                        maxWidth: { xs: 350, md: 250 },
                                        margin: '5px'

                                    }}
                                    alt="Descripción de la imagen"
                                    src={linkedin}
                                />
                            </Box>
                            <Box >
                                <Typography sx={{ fontSize: '20px', fontWeight: '700', color: 'white', fontFamily: 'Montserrat', margin: '5px' }}>
                                    asdasd@asd.com
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '35px', flexDirection: 'column', borderTop: '2px solid white', width: '80%', padding: '20px', mx: 'auto' }}>
                        <Typography sx={{ color: 'white', fontSize: '18px', fontWeight: '700', fontFamily: 'Montserrat', textAlign: 'center' }}>
                            2023 Nombre. All right reserved
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 'auto', width: '90%', gap: '20px' }}>
                            <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Montserrat', }}>
                                Terminos y condiciones
                            </Typography>
                            <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Montserrat', }}>
                                Politicas de privacidad
                            </Typography>
                            <Typography sx={{ fontSize: '12px', color: 'white', fontFamily: 'Montserrat', }}>
                                Seguridad
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}

export default Footer