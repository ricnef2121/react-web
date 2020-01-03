import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { searchSolicitudes } from '../../redux/actions/search'

export default () => {
    //declaramos el dispatch de redux que dipara los actions y reducers
    const dispatch =  useDispatch();
    console.log(dispatch)
    useEffect(() => {
        dispatch(searchSolicitudes())
    });


    return (
        <Container>
            Rest
    </Container>
    );
}