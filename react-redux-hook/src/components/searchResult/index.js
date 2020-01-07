import React from 'react';

import { Card, Grid, Typography, Button } from '@material-ui/core'
//estilos
import style from './style';


let SearchResult = ({ folio, request, emitter }) => {
    const classes = style();
    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <Typography className={classes.poster} >{folio}</Typography>
                </Grid>
                <Grid item className={classes.request}>
                    <Typography>{request}</Typography>
                    <Typography>{emitter.cv}</Typography>
                    <Typography>{emitter.name}</Typography>
                    <Typography>{emitter.address}</Typography>
                    <Button color="primary" variant="contained">Ver mas</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export default SearchResult;