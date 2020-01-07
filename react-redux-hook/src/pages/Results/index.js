import React, { useEffect,useState } from 'react';
import { Container, CircularProgress } from '@material-ui/core';
//import queryString from 'querystring';
import { useDispatch, useSelector } from 'react-redux';
import { searchSolicitudes } from '../../redux/actions/search'

//selectors
import { isResults,isSearchLoading } from '../../redux/selectors';

//componente
import SearchResult from '../../components/searchResult'


export default ({ location }) => {

    //declaramos el dispatch de redux que dipara los actions y reducers
    const dispatch = useDispatch();


    //let results = location.state.results;
    let results = useSelector(state => isResults(state));
   
    const isLoading = useSelector(state => isSearchLoading(state));


    //guardamos el valor que recibimos como parametro de la url
    const ID = location.state;
    //definimos un objeto con una sola propiedad la cual cambiara su valor
    //en base a lo que contenga la constante id
    let search = { id: "" };
    //sumamos lo que contenga la constante ID con el objeto search
    search = { ...ID };

    //bandera
    const [isLooked,setIsLooked] = useState(false);

    useEffect(() => {

        if (search.id && !results || results && results.idResource !== search.id) {
            dispatch(searchSolicitudes(search))
           
        }
        if (!search.id && !isLooked) {
            setIsLooked(true)
           dispatch(searchSolicitudes(search));
            
            console.log("un")
        }
        

    }, []);

    const renderSearch = () => {
  
        if (results) {
            let size = Object.keys(results).length;
            console.log(Object.keys(results).length,'length')
            if(size < 9){
                  return  results.results.map((value,index) => <SearchResult key={index} {...value}/>)
            }else{
                return <SearchResult {...results}/>
            }       
        }
        else if (isLoading){
            return <CircularProgress size={100} color="primary" />
        }
        return <div />
    };


    return (
        <Container>
            {renderSearch()}            
        </Container>
    );
}