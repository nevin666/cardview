import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  
  const Mecad= () => {
    return (
      <div>
        <div>
      <Card style={{ marginTop: '5%', borderColor:'white',borderWidth:'5px',backgroundColor:'grey'}}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Breaking Bad
        </Typography>
        <Typography variant="h3" component="div">
          Walter White
          {/* be{bull}nev{bull}o{bull}lent */}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          year:2015
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </div>
     <div>
     <Card style={{ marginTop: '5%', borderColor:'white',borderWidth:'5px',backgroundColor:'grey'}}>
     <CardContent>
       <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
         Marvel
       </Typography>
       <Typography variant="h3" component="div">
         Avengers
         {/* be{bull}nev{bull}o{bull}lent */}
       </Typography>
       <Typography sx={{ mb: 1.5 }} color="text.secondary">
         year:2020
       </Typography>
     </CardContent>
     {/* <CardActions>
       <Button size="small">Learn More</Button>
     </CardActions> */}
   </Card>
   </div>
   </div>
    )
  }


export default Mecad