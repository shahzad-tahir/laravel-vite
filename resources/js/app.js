import './bootstrap';

import { formatDistance, subDays } from 'date-fns'

alert(formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true }));
