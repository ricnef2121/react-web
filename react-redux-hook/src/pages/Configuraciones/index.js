import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { styles, CustomTextField } from './style';
import Button from '@material-ui/core/Button';
import { useForm } from '../../assets/customHooks';

const initialState = {
  id_eva: '',
  name_eva: '',
  laboratory_denomination: '',
  password_eva: '',
  port: 55101,
  clave_instituto: '',
  clave_laboratorio: '',
  sucursal: '',
  semilla: ''

}


export default () => {

  const classes = styles();

  const [data, setData, resetForm] = useForm(initialState)

  const _onsubmit = _ => {
    console.table(data);
    //form(data)
    // console.log(Object.keys(data));
    resetForm();

  }

  return (
    <div className={classes.root} data-test="ConfiguracionComponent">
      <Grid container spacing={3}>

        

        <Grid item xs={12} style={{}} data-test="firstForm" >
          <Paper className={classes.paper} >
            <form className={classes.form} noValidate autoComplete="off" >
              <Grid item xs={12} container spacing={1} style={{ padding: '0px !important', margin: '0px !importan' }}>

                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.id_eva} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom} 
                    id="id_eva" name="id_eva" label="id_eva" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="id_eva" name="id_eva" label="id_eva" fullWidth
                    required
                    variant="outlined"
                    value={data.id_eva} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.name_eva} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="name_eva" name="name_eva" label="name_eva" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="name_eva" name="name_eva" label="name_eva" fullWidth
                    required
                    variant="outlined"
                    value={data.name_eva} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.laboratory_denomination} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="laboratory_denomination" name="laboratory_denomination" label="laboratory_denomination" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="laboratory_denomination" name="laboratory_denomination" label="laboratory_denomination" fullWidth
                    required
                    variant="outlined"
                    value={data.laboratory_denomination} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.password_eva} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="password_eva" name="password_eva" label="password_eva" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="password_eva" name="password_eva" label="password_eva" fullWidth
                    required
                    variant="outlined"
                    value={data.password_eva} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.port} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="port" name="port" label="port" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="port" name="port" label="port" fullWidth
                    required
                    variant="outlined"
                    value={data.port} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField  value={data.clave_instituto} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="clave_instituto" name="clave_instituto" label="clave_instituto" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="clave_instituto" name="clave_instituto" label="clave_instituto" fullWidth
                    required
                    variant="outlined"
                    value={data.clave_instituto} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.clave_laboratorio} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="clave_laboratorio" name="clave_laboratorio" label="clave_laboratorio" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="clave_laboratorio" name="clave_laboratorio" label="clave_laboratorio" fullWidth
                    required
                    variant="outlined"
                    value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.sucursal} onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="sucursal" name="sucursal" label="sucursal" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="sucursal" name="sucursal" label="sucursal" fullWidth
                    required
                    variant="outlined"
                    value={data.sucursal} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField value={data.semilla}  onChange={setData}
                    required variant="outlined" className={classes.fieldCustom}
                    id="semilla" name="semilla" label="semilla" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  /> */}
                  <CustomTextField
                    id="semilla" name="semilla" label="semilla" fullWidth
                    required
                    variant="outlined"
                    value={data.semilla} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container >
                  <Button variant="contained" onClick={_onsubmit}>Default</Button>
                </Grid>
              </Grid>


            </form>
          </Paper>
        </Grid>












        <Grid item xs={12}  >
          <Paper className={classes.paper} >
            <form className={classes.form} noValidate autoComplete="off">
              <Grid item xs={12} container spacing={1} >
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  {/* <TextField
             required className={classes.fieldCustom} variant="outlined"  
             id="meta_active" name="meta_active" label="meta_active" fullWidth  color=""         
             //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
           /> */}

                  <CustomTextField
                    label="meta_active" required
                    variant="outlined"
                    id="meta_active" fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="meta_timestamp_create" name="meta_timestamp_create" label="meta_timestamp_create" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="meta_timestamp_modification" name="meta_timestamp_modification" label="meta_timestamp_modification" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="meta_type" name="meta_type" label="meta_type" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="id" name="id" label="id" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="id_lis" name="id_lis" label="id_lis" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="name_lis" name="name_lis" label="name_lis" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="password_lis" name="password_lis" label="password_lis" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="password_salt_lis" name="password_salt_lis" label="password_salt_lis" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
                    id="astm_ip" name="astm_ip" label="astm_ip" fullWidth
                  //autoComplete="clave_laboratorio" //  value={data.clave_laboratorio} onChange={setData}
                  />
                </Grid>
                <Grid item xs={12} sm={4} container className={classes.gridOverflow} >
                  <TextField
                    required className={classes.fieldCustom} variant="outlined"
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
    </div>
  );
}