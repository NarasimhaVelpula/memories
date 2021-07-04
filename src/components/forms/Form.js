import React,{useState} from 'react'
import useStyles from './styles'
import {Paper,Button, Typography, TextField} from '@material-ui/core'
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../redux/actions/post';

export default function Form() {
    const classes=useStyles();
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
        e.preventDefault();
      
        dispatch(createPost(postData))
        clear()
    }
    const [postData,setPostData]=useState({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    })
    const handleChange=e=>{
        setPostData({...postData,[e.target.name]:e.target.value})
    }
    const clear=()=>{
        setPostData({
            creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
        })
    }
    
    return (
        <Paper className={classes.paper}>
            <form className={`${classes.root} ${classes.form}`} autoComplete='off' noValidate onSubmit={handleSubmit}>
                <Typography variant="h6">Create Your Memory</Typography>
                <TextField 
                    name="creator" 
                    variant="outlined" 
                    label ="creator" 
                    fullWidth
                    value={postData.creator}
                    onChange={handleChange}
                 />
                  <TextField 
                    name="title" 
                    variant="outlined" 
                    label ="title" 
                    fullWidth
                    value={postData.title}
                    onChange={handleChange}
                 />
                  <TextField 
                    name="message" 
                    variant="outlined" 
                    label ="message" 
                    fullWidth
                    value={postData.message}
                    onChange={handleChange}
                 />
                 <TextField 
                    name="tags" 
                    variant="outlined" 
                    label ="tags" 
                    fullWidth
                    value={postData.tags}
                    onChange={handleChange}
                 />
                 <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                 
                 <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>

        </Paper>
    )
}
