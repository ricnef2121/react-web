import React, { useEffect } from 'react';
import { Container, CircularProgress } from '@material-ui/core';
//import queryString from 'querystring';
import { useDispatch, useSelector } from 'react-redux';
import { searchSolicitudes } from '../../redux/actions/search'

//selectors
import { isResults } from '../../redux/selectors';

//componente
import searchResult from '../../components/searchResult'

export default ({ location }) => {

    //declaramos el dispatch de redux que dipara los actions y reducers
    const dispatch = useDispatch();



    //const results = useSelector(state =>{ isResults(state)});
    const results = useSelector(state => isResults(state));
    console.log(results, "cnoso")
    //guardamos el valor que recibimos como parametro de la url
    const ID = location.state;
    //definimos un objeto con una sola propiedad la cual cambiara su valor
    //en base a lo que contenga la constante id
    let search = { id: "" };
    //sumamos lo que contenga la constante ID con el objeto search
    search = { ...ID };

    useEffect(() => {

        if (search.id && !results) {
            dispatch(searchSolicitudes(search))
            console.log("un")
        }
        if (!search.id && !results) {
            dispatch(searchSolicitudes(search))
            console.log('no')
        }


    });

    const renderSearch = () => {
  
        if (results) {
            console.log('map')
            return searchResult();
        //     return (<Card >

        //         <Grid container>
        //             <Grid item>
        // <Typography> {results.idResource}</Typography>
        //             </Grid>
        //             <Grid item>
        //                 <Typography>sad</Typography>
        //                 <Typography>asd</Typography>
        //                 <Typography>asd</Typography>
        //                 <Button color="primary" variant="contained">Ver mas</Button>
        //             </Grid>
        //         </Grid>
        //     </Card>);
        }
        else {
            return <CircularProgress size={100} color="primary" />
        }
    };


    return (
        <Container>
            {renderSearch()}
            
        </Container>
    );
}