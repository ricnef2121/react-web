import React ,{useState}from 'react';
import {Container,Typography, Card,Grid,TextField} from '@material-ui/core'

export default () => {

    const [searchText,setSearchText] = useState('');
    const handleSearchTextChnge = event => {
        setSearchText(event.target.value);
    };

    return (
        <Container>
            <Card>
                <Grid container>
                    <Grid><Typography>Bienvenido</Typography></Grid>
                    <Grid>
                        <label>Icon</label>
                    </Grid>
                </Grid>
                <TextField
                value = ""
                placeholder="Buscar..."
                onChange={handleSearchTextChnge}
                />
            </Card>
        </Container>
    );
}