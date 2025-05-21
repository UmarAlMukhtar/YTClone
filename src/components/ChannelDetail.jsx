import {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null)
  const [videos, setVideos] = useState([])
  const  { id} = useParams();

  console.log(channelDetail,videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setchannelDetail(data?.items[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&maxResults=50`)
      .then((data) => setVideos(data?.items));
  },[id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div style={{ 
          background: '#f071b0',
          background: 'radial-gradient(circle, rgba(240, 113, 176, 1) 29%, rgba(148, 187, 233, 1) 100%)',
          zIndex: 10,
          height: '300px',
        }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop={"-110px"}/>
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: '100px' } }} />
          <Videos videos={videos} direction="column" />
      </Box>
    </Box>
  )
}

export default ChannelDetail