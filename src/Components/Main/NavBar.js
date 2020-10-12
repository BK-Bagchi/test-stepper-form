import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    setBackground: {
        background: 'linear-gradient(170deg,#8395a7 80%, #222f3e 40%,#576574 50%)'
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.setBackground}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Pipesort Technologies LLP
                    </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Career</Button>
                    <Button color="inherit">Contact</Button>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default NavBar;
