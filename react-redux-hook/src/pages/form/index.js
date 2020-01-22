import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import styles from './style';
import Button from '@material-ui/core/Button';

export default () => {
    const classes = styles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={12}  >
                <Paper className={classes.paper} >
                    <form className={classes.form} noValidate autoComplete="off">
                        <Grid item xs={12} container spacing={1} >
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="meta_active" name="meta_active" label="meta_active" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="meta_timestamp_create" name="meta_timestamp_create" label="meta_timestamp_create" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="meta_timestamp_modification" name="meta_timestamp_modification" label="meta_timestamp_modification" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="meta_type" name="meta_type" label="meta_type" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="id" name="id" label="id" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="id_lis" name="id_lis" label="id_lis" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="name_lis" name="name_lis" label="name_lis" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="password_lis" name="password_lis" label="password_lis" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="password_salt_lis" name="password_salt_lis" label="password_salt_lis" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="astm_ip" name="astm_ip" label="astm_ip" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                                <TextField
                                    required className={classes.fieldCustom}
                                    id="astm_port" name="astm_port" label="astm_port" fullWidth
                                //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4} container  >
                                <Button variant="contained">Default</Button>
                            </Grid>
                        </Grid>


                    </form>
                </Paper>
            </Grid>







        </Grid>
    );
}