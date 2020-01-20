import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { 
    Menu, 
    MenuItem,
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    InputBase,
    Badge,
    Button
} from '@material-ui/core';
import {
    Search as SearchIcon,
    Notifications as NotificationsIcon,
    ShoppingCart as ShoppingCartIcon,
    MoreVert as MoreIcon,
    AccountCircle
} from '@material-ui/icons';
import { fade, makeStyles } from '@material-ui/core/styles';
import { signOut } from '../../store/actions/authAction';


const useStyles = makeStyles(theme => ({
    root: {
        '& header': {
            background: '#1976d2'
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        color: 'white',
        display: 'none',
        flexBasis: '15%',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    grow: {
        flexGrow: 1
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 270,
            '&:focus': {
            width: 350,
        },
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex'
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }
}));

const MenuStore = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleSignOut = () => {
        dispatch(signOut());
        handleMenuClose();
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Minha Conta</MenuItem>
      <MenuItem onClick={handleSignOut}>Sair</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>Sair</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <Link to='/store'>
            <Typography className={classes.title} variant="h6" noWrap>
                Global Manager
            </Typography>
          </Link>
         <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
         <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Link to='/store/cart' style={{ color: '#fff' }}>
                <IconButton color="inherit">
                <Badge badgeContent={6} color="secondary">
                    <ShoppingCartIcon />
                </Badge>
                </IconButton>            
            </Link>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={'primary-search-account-menu'}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
};

export default MenuStore;
