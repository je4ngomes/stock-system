import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

import DisplayPrice from '../DisplayPrice';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    height: 150,
    width: '100%',
    '&:hover': {
        cursor: 'pointer'
    }
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  }
}));

const ProductCard = ({
    imgSrc,
    price,
    key,
    discount,
    onEdit,
    deleteLoading,
    onDelete,
    title,
    showAction
}) => {
    const classes = useStyles();
    
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={imgSrc}
                title={title}
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Link to='#'>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                    </Link>
                    <DisplayPrice price={price} discount={discount}/>
                </CardContent>
            </div>
            {showAction && (
                <CardActions>
                    <Button onClick={onEdit} shape='circle' type="primary">
                        <Icon type="edit" theme='filled' />
                    </Button>
                    <Button loading={deleteLoading} onClick={onDelete} shape='circle' type="danger">
                        <Icon type="delete" theme='filled' />
                    </Button>
                </CardActions>            
            )}
        </Card>
    );
}

export default ProductCard;
