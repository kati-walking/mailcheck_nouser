import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import axios, {AxiosRequestConfig, AxiosResponse,AxiosError} from 'axios';


const theme = createTheme({});

export default function RegistAdress(){
    const navigate = useNavigate();
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            mailadress: data.get('email'),
            Token: data.get('Token'),
        });
        const url = "http://localhost:3000";

        try {
            const options:AxiosRequestConfig ={
                url:"http://localhost:3000/RegistAdress",
                method:"GET",
                params:{
                    email:data.get('email'),
                    Token:data.get('Token')
                }
            };
            axios(options)
                .then((res: AxiosResponse<{
                    email:string,
                    Token:string
                }>) =>{
                    const {data,status}=res;
                    console.log(res.data);
                    console.log(res.status);
                    navigate('/UserPage')
                })
            //console.log("poyopoyo");
        } catch (error) {
            alert("adress or password are wrong")
            console.log(error)
        }
    };
    return(
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Regist Adress
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="MailAdress"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="Token"
                            label="Token"
                            type="Token"
                            id="Token"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Regist Adress
                        </Button>
                    </Box>
                    <Grid container justifyContent="flex-start">
                        <Grid item>
                            <Link href="#" variant="body2" onClick={()=>navigate('/UserPage')}>
                                    return UserPage
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </ThemeProvider >
    )
}