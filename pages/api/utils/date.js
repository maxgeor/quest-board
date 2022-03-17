import { format } from 'date-fns'

const prettyDate = date => format(new Date (date), 'MMM d, yyyy');

export default prettyDate;