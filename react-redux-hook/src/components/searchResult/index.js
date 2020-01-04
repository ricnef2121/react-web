import React from 'react';

import { Card, Grid, Typography, Button } from '@material-ui/core'

let searchResult = (props)=> {
    return (
        <Card>

            <Grid container>
                <Grid item>
                    <Typography> sss</Typography>
                </Grid>
                <Grid item>
                    <Typography>sad</Typography>
                    <Typography>asd</Typography>
                    <Typography>asd</Typography>
                    <Button color="primary" variant="contained">Ver mas</Button>
                </Grid>
            </Grid>
        </Card>
    );
}

export default searchResult;