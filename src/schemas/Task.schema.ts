import * as yup from 'yup';

export const taskSchema = yup.object().shape({
  priority: yup.object<{id: number, label: string}>().required('Priority must be filled'),
  label: yup.object<{id: number, label: string}>().required('Label must be filled'),
  description: yup.string().required('Description must be filled').min(5, 'Description must be minimum 5 characters'),
  title: yup.string().required('Title must be filled').min(5, 'Title must be minimum 5 characters')
});