import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';

function Pages() {
    const displayCards = ['Count App', 'Todo App', 'Redux ToolKit', 'More'];

    return(
    <div class="h-screen flex flex-col justify-center items-center">
        <Box
            sx={{
            width: 750,
            height: 490,
            borderWidth: '2px',
            borderColor: 'black',
            backgroundColor: '#ffffff',
            // '&:hover': {
            //   backgroundColor: 'primary.main',
            //   opacity: [0.9, 0.8, 0.7],
            // },
            }}
        >   
        <div class='flex p-4'>
            {displayCards.map((itm) => (
                    <Card 
                        class='shadow flex flex-col justify-center items-center m-1'
                        variant="outlined"
                        style={{height: '200px', width: '200px'}}
                     >
                        <h1 class=''>
                            {itm}
                        </h1>
                    </Card>
            ))}
        </div>
        </Box>
      {/* <div className="text-3xl font-bold underline">
        <h1>Sample Projects</h1>
      </div> */}
    </div>
    )
}

export default Pages