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
    minHeight: 150,
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
  },
  title: {
      textTransform: 'capitalize'
  }
}));

const ProductCard = ({
    imgSrc,
    price,
    id,
    discount,
    onEdit,
    deleteLoading,
    onDelete,
    title,
    hasLink,
    showAction
}) => {
    const classes = useStyles();
    
    return (
        <Link to={hasLink ? `/store/view/${id}` : '#'}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.cover}
                    image={imgSrc}
                    title={title}
                />
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography className={classes.title} component="h5" variant="h5">
                            {title}
                        </Typography>
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
        </Link>
    );
}

export default ProductCard;
