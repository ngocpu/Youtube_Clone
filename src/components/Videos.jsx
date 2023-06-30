import { Box, Stack, Grid } from "@mui/material";
import React from "react";
import { ChannelCard, Loader, VideoCard } from "./";
const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;

  return (
    // <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    //   {videos.map((item, idx) => (
    //     <Box key={idx}>
    //       {item.id.videoId && <VideoCard video={item} /> }
    //       {item.id.channelId && <ChannelCard channelDetail={item} />}
    //     </Box>
    //   ))}
    // </Stack>
    <Stack justifyContent='center' alignItems='center' direction={direction|| 'row'} flexWrap='wrap' gap={2}>
      {videos.map((item, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}  >
          <Box sx={{width:{xs:'300px',md:'30%'}}}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        </Grid>
      ))}
    </Stack>
      
    
  );
};

export default Videos;
