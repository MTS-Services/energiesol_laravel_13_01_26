
import { InlineWidget } from 'react-calendly';

function Calendly() {


return (
<div className='w-full'>
  <InlineWidget url="https://calendly.com/username/for-free-consultation"   styles={{ height: "90vh"  , width:"100%"}} />
</div>
);
}

export {Calendly}