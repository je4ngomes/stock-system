import React, { useState } from 'react';
import { Button, Icon, Badge } from 'antd';
import moment from 'moment';
import 'moment/locale/pt-br';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const EVENTCOLORS = {
    INFO: '#2196f3',
    WARN:'#ffeb3b',
    CRITICAL: '#ef5350'
};

const useStyles = makeStyles(theme => ({
  card: props => ({
    display: 'flex',
    minHeight: 120,
    width: 350,
    [props.border]: `3px solid ${props.eventColor}`
  }),
  details: {
    display: 'flex',
    width: 350,
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  }
}));

const EventCard = ({
    onEdit,
    deleteLoading,
    onDelete,
    title,
    launched=false,
    eventType='INFO',
    align='left',
    startDate=+new Date(),
    endDate=+new Date(),
    description
}) => {
    const classes = useStyles({ 
        eventColor: EVENTCOLORS[eventType], 
        border: align === 'right' ? 'borderRight' : 'borderLeft' 
    });
    const [showAction, setShowAction] = useState(false);
    
    return (
        <Badge count={0}>
            <Card className={classes.card}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {title}
                        </Typography>
                        <div style={{ margin: '5px 0' }}>
                            <div>
                                <span style={{ fontSize: '13pt', fontWeight: '200'}}>Início:</span>{' '}
                                {moment(startDate).locale('pt-br').format('lll')}
                            </div> 
                            <div>
                               <span style={{ fontSize: '13pt', fontWeight: '200'}}>Fim:</span>{' '}
                               {moment(endDate).locale('pt-br').format('lll')}
                            </div>
                        </div>
                        <Typography align='justify' variant="subtitle2" color="textSecondary">
                            {description}
                        </Typography>
                        <div 
                            style={{ 
                                cursor: 'pointer',
                                color: '#2196f3',
                                marginTop: 5
                            }}
                            onClick={() => setShowAction(!showAction)}
                        >
                            {showAction ? 'Ocultar' : 'Mostrar'} ações
                        </div>   
                    </CardContent>

                    {showAction && (
                        <CardActions style={{ position: 'relative', margin: '0px 10px 35px' }}>                                    
                            <div>
                                {!launched && <Button
                                        shape='round'
                                        style={{ position: 'absolute', left: 0 }}
                                        type='primary'>
                                            Notificar usuários
                                </Button>}
                                {!launched && <Button 
                                    style={{ position: 'absolute', right: 35 }} 
                                    onClick={onEdit} 
                                    shape='circle' 
                                    type="primary"
                                >
                                    <Icon type="edit" theme='filled' />
                                </Button>}
                                <Button 
                                    loading={deleteLoading}
                                    style={{ position: 'absolute', right: 0 }} 
                                    onClick={onDelete} 
                                    shape='circle' 
                                    type="danger"
                                >
                                    <Icon type="delete" theme='filled' />
                                </Button>                                    
                            </div>
                        </CardActions>
                    )}
                </div>
            </Card>
        </Badge>          
    );
}

export default EventCard;
