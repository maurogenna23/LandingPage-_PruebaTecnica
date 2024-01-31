import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import usuario from '../../assets/mdi_user.png';

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setDrawerOpen(open);
    };

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'Menu', 'Eventos', 'Servicios'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} sx={{ '.MuiListItemText-primary': { textTransform: 'capitalize', lineHeight: '23.12px', color: 'black', fontFamily: 'jost', fontSize: '16px', fontWeight: '400' } }} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'jost', height: '45px', fontWeight: '900', fontSize: '31.25px', lineHeight: '45.16px', width: '250px' }}>
                    Logo
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={drawerOpen}
                            onClose={toggleDrawer(false)}
                        >
                            {list()}
                        </Drawer>
                    </>
                ) : (
                    <Box sx={{
                        flexGrow: 3,
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'jost',
                        fontWeight: '600',
                        gap: '16px',
                        '& button': {
                            position: 'relative',
                            textTransform: 'capitalize',
                            textDecoration: 'none',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                width: '0',
                                height: '2px',
                                bottom: 0,
                                left: '100%',
                                backgroundColor: 'currentColor',
                                transition: 'width 0.3s ease-in-out, left 0.3s ease-in-out',
                            },
                            '&:hover::after': {
                                width: '100%',
                                left: '0',
                            }
                        },

                    }}>
                        <Button sx={{ textTransform: 'capitalize', lineHeight: '23.12px', color: ' white', fontFamily: 'jost', fontSize: '16px', fontWeight: '400' }}>Home</Button>
                        <Button sx={{ textTransform: 'capitalize', lineHeight: '23.12px', color: ' white', fontFamily: 'jost', fontSize: '16px', fontWeight: '400' }}>Menu</Button>
                        <Button sx={{ textTransform: 'capitalize', lineHeight: '23.12px', color: ' white', fontFamily: 'jost', fontSize: '16px', fontWeight: '400' }}>Eventos</Button>
                        <Button sx={{ textTransform: 'capitalize', lineHeight: '23.12px', color: ' white', fontFamily: 'jost', fontSize: '16px', fontWeight: '400' }}>Servicios</Button>
                    </Box>
                )}

                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end', width: '250px' }}>
                    <IconButton color="inherit" sx={{
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        }
                    }}>
                        <Box
                            component="img"
                            sx={{
                                height: '24px',
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                backgroundColor: 'white',
                                borderRadius: '10px'
                            }}
                            alt="Descripción de la imagen"
                            src={usuario}
                        />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
