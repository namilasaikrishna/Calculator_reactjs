import React,{useState} from 'react'

import {Grid,TextField,Button,Typography} from "@mui/material"
import './Calculator.css'



function Calculator() {

    const[result,setResult] = useState("")
  

    const onClickHandler = (e) =>{
        setResult(result.concat(e.target.value))
        
        
    }

    const clearHandler = () =>{
        setResult("")
    }

    const deleteHandler = () =>{
        setResult(result.slice(0,-1))
    }

    const calculateHandler = () =>{
        try{
            setResult(eval(result).toString())
            
        }
        catch(error){
            setResult("Error")
        }
        
    }

  return (
    <div>
   
    <Grid container >
    <Grid item xs={12}>
    <Typography varient="h1">Calculator</Typography>
    </Grid>
    <Grid item xs={12} marginTop="20px">
    <TextField variant='outlined' fullWidth value={result}/>
    </Grid>
    <Grid container spacing={1} marginTop="20px">
    <Grid item xs={4}>
    <Button variant='contained' onClick={clearHandler}>Clear</Button>
    </Grid>
    <Grid item xs={4}>
    <Button variant='contained' onClick={deleteHandler}>C</Button>
    </Grid>
    <Grid item xs={4}>
    <Button variant='contained' value="/" onClick={onClickHandler}>/</Button>
    </Grid>
    </Grid>
    <Grid container spacing={2} marginTop="20px">
    <Grid item xs={3}>
    <Button variant='contained' value="7" onClick={onClickHandler}>7</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="8" onClick={onClickHandler}>8</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="9" onClick={onClickHandler}>9</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="*" onClick={onClickHandler}>*</Button>
    </Grid>
    </Grid>
    <Grid container spacing={2} marginTop="20px">
    <Grid item xs={3}>
    <Button variant='contained' value="4" onClick={onClickHandler}>4</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="5" onClick={onClickHandler}>5</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="6" onClick={onClickHandler}>6</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="-" onClick={onClickHandler}>-</Button>
    </Grid>
    </Grid>
    <Grid container spacing={2} marginTop="20px">
    <Grid item xs={3}>
    <Button variant='contained' value="1" onClick={onClickHandler}>1</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="2" onClick={onClickHandler}>2</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="3" onClick={onClickHandler}>3</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="+" onClick={onClickHandler}>+</Button>
    </Grid>
    </Grid>
    <Grid container spacing={2} marginTop="20px">
    <Grid item xs={3}>
    <Button variant='contained' value="0">0</Button>
    </Grid>
    <Grid item xs={3}>
    <Button variant='contained' value="." onClick={onClickHandler}>.</Button>
    </Grid>
    <Grid item xs={6}>
    <Button variant='contained' value="=" onClick={calculateHandler}>=</Button>
    </Grid>
    </Grid>
    </Grid>
    </div>
   
  )
}

export default Calculator
