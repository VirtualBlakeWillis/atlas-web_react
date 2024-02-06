import {normalize, schema} from 'normalizr';

const course = new schema.Entity('courses');
const courses = new schema.Array(course);

export const normalizeCourses = (data) => normalize(data, courses);