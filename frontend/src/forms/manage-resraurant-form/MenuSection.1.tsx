import { FormDescription } from '@/components/ui/form';
import { useFieldArray, useFormContext } from 'react-hook-form';


export default function MenuSection() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className='space-y-2'>
      <div>
        <h2 className='text-2xl font-bold'>Menu</h2>
        <FormDescription>
          Manage your restaurant menu.
        </FormDescription>
      </div>
      <FormField
        control={control} />
    </div>
  );
}
