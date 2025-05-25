import { useState, useEffect, use } from 'react';
import { Link, useParams } from 'react-router-dom';
import reactPlayer from 'react-player';
import { Box, Typography, Stack } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos } from './';

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => {
        setVideoDetail(data.items[0]);
      });
  }, [id]);

  return (
    <Box minHeight={'95vh'}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <reactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail