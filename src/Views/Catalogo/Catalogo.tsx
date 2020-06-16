import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Container, Grid, Divider} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

import Card from '../../Components/Card/Card';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

function Catalogo() {
  const classes = useStyles();
  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={4}>
          
          <Grid item xs={12}>
            <h1> Catálogo </h1>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={4}>
            <FormControl fullWidth className={classes.margin}>
                <InputLabel htmlFor="standard-adornment-amount">Nome</InputLabel>
                <Input id="id-nome-categoria"/>
            </FormControl>
          </Grid>
          
          <Grid item xs={4}>
              <FormControl fullWidth className={classes.margin}>
                  <InputLabel htmlFor="standard-adornment-amount">Idade</InputLabel>
                  <Input id="id-idade-categoria" type="number"/>
              </FormControl>
          </Grid>

          <Grid item xs={4}>
            <Autocomplete
              multiple
              limitTags={2}
              id="id-combobox-categoria"
              options={Categoria}
              getOptionLabel={(option) => option.title}
              renderInput={(params) => (
                <TextField {...params} variant="outlined" label="Categoria" placeholder="categoria" />
              )}
            />
          </Grid>

        </Grid>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
                <Grid item xs={4}>
                    <Card />
                </Grid>
            </Grid>
      </div>
    </Container>
  );
}

export default Catalogo;

const Categoria = [
  { title: 'Amargo' },
  { title: 'Azedo' },
  { title: 'Salgado'},
  { title: 'Doce'},
];

const Notas = [
  { title: 'Amadeirado' },
  { title: 'Bla bla bla' },
  { title: 'Bla bla bla'},
  { title: 'Bla bla bla'},
];