// START TEST MUI

// import * as React from 'react';
// import Button from '@mui/material/Button';

// const Testing = () => {
// return(
//     <>
//     <h2> page for MUI testing</h2>
//     <Button variant="contained">Hello world</Button>

//     </>
// )
// }

// export default Testing;


// SECOND TEST MUI


// import * as React from 'react';
// import Rating from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
// import Button from '@mui/material/Button';

// const labels = {
//   0.5: 'Useless',
//   1: 'Useless+',
//   1.5: 'Poor',
//   2: 'Poor+',
//   2.5: 'Ok',
//   3: 'Ok+',
//   3.5: 'Good',
//   4: 'Good+',
//   4.5: 'Excellent',
//   5: 'Excellent+',
// };

// function getLabelText(value) {
//   return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
// }

// export default function Testing() {
//   const [value, setValue] = React.useState(2);
//   const [hover, setHover] = React.useState(-1);

//   return (
//     <>
//         <h2> page for MUI testing</h2>
//     <Button sx={{mb: 2}} variant="contained">Hello world</Button>
//     <Box
//       sx={{
//         width: 200,
//         display: 'flex',
//         alignItems: 'center',
//       }}
//     >
//       <Rating
//         name="hover-feedback"
//         value={value}
//         precision={0.5}
//         getLabelText={getLabelText}
//         onChange={(event, newValue) => {
//           setValue(newValue);
//         }}
//         onChangeActive={(event, newHover) => {
//           setHover(newHover);
//         }}
//         emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
//         o
//       />
//       {value !== null && (
//         <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
//       )}
//     </Box>
//     </>
//   );
// }





// TEST TAILWIND
import tailwindStyles from './testing.module.css'

const Testing = () => {
return(
    <>
    <div className="border border-spacing-3 border-purple-500 rounded-lg">
    <h2 className="p-3 text-4xl font-semibold text-center text-lime-400"> page for TAILWIND testing</h2>
    <button className='mb-2
     bg-indigo-400
      text-red-700 
      h-10 
      w-40 
      px-3 
      py-10 
      hover:bg-opacity-10
       md:bg-orange-500
        lg:bg-yellow-500'
        >what a fuck</button>

<button className={tailwindStyles.button}
        >do not swear here!</button>
    </div>

    </>
)
}

export default Testing;