import './bootstrap';

import { formatDistance, subDays } from 'date-fns'
import { greeting } from "./Test";

// alert(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));

alert(greeting('Shahzad'));
