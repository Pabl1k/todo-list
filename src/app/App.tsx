import React from 'react';
import {useSelector} from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import {TodolistsList} from '../features/TodolistsList/TodolistsList';
import {ErrorSnackbar} from '../components/ErrorSnackbar/ErrorSnackbar';
import {AppRootStateType} from './store';
import {RequestStatusType} from './app-reducer';

type PropsType = {
    demo?: boolean
}

function App({demo = false}: PropsType) {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status);

    return (
        <>
            <ErrorSnackbar/>
            <AppBar position="static">
                <Toolbar />
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
                <Container fixed>
                    <TodolistsList demo={demo}/>
                </Container>
            <div style={{position: "absolute", right: 0, top: 50, width: 300}}>
                <h3>
                    NOTE:
                </h3>
                <span>
                    Please note that it is an open page with a single API key to the server. Anything written here can be added by any internet user.
                </span>
            </div>
        </>
    )
}

export default App
