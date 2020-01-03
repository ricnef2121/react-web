import React ,{useState}from 'react';
import {Container,Typography, Card,Grid,TextField,Button} from '@material-ui/core'
import { mergeClasses } from '@material-ui/styles';
import styles from './style'
import {MovieIcon} from '../../icons'

export default ({history}) => {
    console.log(history)
    const [searchText,setSearchText] = useState('');
    const classes = styles();
    const handleSearchTextChnge = event => {
        setSearchText(event.target.value);
    };

    const handleCleanTextClick=event=>{
        setSearchText('')
    };
    const handleSearchTextClick=event=>{
        history.push(`/results?movieName=${searchText}`)
    };

    //console.log(searchText);

    return (
        <Container className={classes.container}>
            <Card className={classes.cardContainer}>
                <Grid container className={classes.titleGridContainer}>
                    <Grid><Typography className={classes.title}>Bienvenido</Typography></Grid>
                    <Grid>
                        <MovieIcon className={classes.movieIcon}/>
                    </Grid>
                </Grid>
                <TextField
                className={classes.textFieldSearch}
                value = {searchText}
                placeholder="Buscar..."
                onChange={handleSearchTextChnge}
                />
                <Grid className={classes.buttonsContainer}>
                    <Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
                    <Button variant="contained" className={classes.searchButton} color="primary" size="large" onClick={handleSearchTextClick}>Buscar</Button>
                </Grid>
            </Card>
        </Container>
    );
}