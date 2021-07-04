import React,{useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';
import { CircularProgress } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import memories from './images/memories.png';
import Form from './components/forms/Form';
import Posts from './components/posts/Posts';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {getPosts} from './redux/actions/post'

const App=()=>{
  const classes=useStyles()
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
  const loaderState=useSelector(state=>state.loaderState)
  const rootRef = React.useRef(null);
  console.log(loaderState)
  return(
    <Container maxWidth='lg' ref={rootRef}>
     {loaderState? <Modal
  disablePortal
  disableEnforceFocus
  disableAutoFocus
  open
  aria-labelledby="server-modal-title"
  aria-describedby="server-modal-description"
  className={classes.modal}
  container={() => rootRef.current}
>
  <>
   <b>Updating</b>  <LinearProgress />
   <CircularProgress />
      </>
</Modal>:""}
      <AppBar className={classes.appBar} color='inherit' position='static'>
          <Typography className={classes.heading} align='center' variant='h2'>Memories</Typography>
          <img src={memories} className={classes.image} alt='memories' height="80" width="100"/>
      </AppBar>
      <Grow in>
        <Container>
        <Grid container justify='space-between' alignItems='stretch' spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
        </Container>
      </Grow>
    </Container>
  )
}
export default App